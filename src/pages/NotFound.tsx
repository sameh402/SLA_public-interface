import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">{t("notFound.title")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            {t("notFound.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                {t("notFound.home")}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              {t("notFound.back")}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
