import React from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <p className="text-muted-foreground mb-6">
              This privacy policy will be updated soon with comprehensive
              details about how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
