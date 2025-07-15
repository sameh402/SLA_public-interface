import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Lock, Mail, User } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export function LoginPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Reuse your existing navigation */}
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto p-8 rounded-xl border bg-background shadow-lg">
          <div className="flex flex-col space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                {t("LogIntitle")}
              </h1>
              <p className="text-muted-foreground mt-2">
                {t("LogInsubtitle")}
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("LogInemail")}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("LogInemail_placeholder")}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("LogInpassword")}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder={t("LogInpassword_placeholder")}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {/* Remember me checkbox could go here */}
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  {t("LogInforgot_password")}
                </Link>
              </div>

              <Button type="submit" className="w-full">
                {t("LogInsubmit")}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {t("LogInor_continue_with")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  {/* Google icon */}
                </svg>
                Google
              </Button>
              <Button variant="outline" className="gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  {/* Facebook icon */}
                </svg>
                Facebook
              </Button>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
              {t("LogInno_account")}{" "}
              <Link
                to="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                {t("LogInsign_up")}
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}