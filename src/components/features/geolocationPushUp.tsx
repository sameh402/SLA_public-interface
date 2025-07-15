import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";

// Custom hook for Egypt detection
const useEgyptDetection = () => {
  const [geoError, setGeoError] = useState<string | null>(null);
  const setEgyptUser = useStore((state) => state.setEgyptUser);

  const checkIfEgypt = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      const data = await response.json();
      const isEgypt = data.address?.country === "Egypt";
      setEgyptUser(isEgypt);
      return isEgypt;
    } catch (err) {
      setGeoError("Failed to detect country.");
      setEgyptUser(false); // Default to USD on error
      return false;
    }
  };

  const detectEgypt = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation not supported.");
      setEgyptUser(false); // Default to USD
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const isEgypt = await checkIfEgypt(
            position.coords.latitude,
            position.coords.longitude,
          );
          resolve(isEgypt);
        },
        (err) => {
          setGeoError("Location access denied.");
          setEgyptUser(false); // Default to USD when denied
          resolve(false);
        },
      );
    });
  };

  return { geoError, detectEgypt };
};

// Main Component
const GeolocationPopup = () => {
  const [showLocationRequest, setShowLocationRequest] = useState(true);
  const [showCurrencyReminder, setShowCurrencyReminder] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { geoError, detectEgypt } = useEgyptDetection();
  const isEgyptUser = useStore((state) => state.isEgyptUser);
  const setEgyptUser = useStore((state) => state.setEgyptUser);

  const requestLocation = async () => {
    setIsProcessing(true);
    setShowLocationRequest(false);

    const isEgypt = await detectEgypt();

    setIsProcessing(false);
    setShowCurrencyReminder(true);
  };

  const handleDeny = () => {
    setEgyptUser(false); // Default to USD when denied
    setShowLocationRequest(false);
    setShowCurrencyReminder(true);
  };

  const openLocationSettings = () => {
    // Show instructions for enabling location access
    alert(
      "To enable location access:\n\n1. Click the location icon (🔒) in your browser's address bar\n2. Select 'Allow' for location access\n3. Refresh the page\n\nAlternatively, check your browser's site settings for this website.",
    );
  };

  const closeAllPopups = () => {
    setShowCurrencyReminder(false);
  };

  return (
    <>
      {/* Blur Overlay */}
      {(showLocationRequest || showCurrencyReminder || isProcessing) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50" />
      )}

      {/* Processing State */}
      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Detecting your location...
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please wait while we determine your country for accurate
                pricing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Popup 1: Location Request */}
      {showLocationRequest && !isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Enable Location?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Please allow the website to access your location to provide
              accurate pricing based on your country and currency.
            </p>

            <div className="flex justify-between gap-6">
              <button
                onClick={handleDeny}
                className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
              >
                Deny
              </button>
              <button
                onClick={requestLocation}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup 2: Currency Reminder */}
      {showCurrencyReminder && !isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              {isEgyptUser ? "Local Pricing Available" : "Prices in USD"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              {isEgyptUser
                ? "You're now viewing prices in your local currency (EGP)."
                : "You're viewing prices in USD by default. Enable location access for accurate local pricing."}
            </p>

            {geoError && !isEgyptUser && (
              <p className="text-yellow-600 mb-4 text-center text-sm">
                {geoError}
              </p>
            )}

            <div className="flex justify-center gap-4">
              {!isEgyptUser && (
                <button
                  onClick={openLocationSettings}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Allow Location Access
                </button>
              )}
              <button
                onClick={closeAllPopups}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                {isEgyptUser ? "Continue" : "OK"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeolocationPopup;
