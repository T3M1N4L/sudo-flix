import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/buttons/Button";
import { Icons } from "@/components/Icon";
import { IconPill } from "@/components/layout/IconPill";
import { Navigation } from "@/components/layout/Navigation";
import { SolidSettingsCard } from "@/components/layout/SettingsCard";
import { Title } from "@/components/text/Title";
import { Heading3, Paragraph } from "@/components/utils/Text";
import { ErrorContainer, ErrorLayout } from "@/pages/layouts/ErrorLayout";
import { conf } from "@/utils/setup/config";

type MaintenancePageProps = {
  onHomeButtonClick: () => void;
};

function MaintenancePage({ onHomeButtonClick }: MaintenancePageProps) {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-1 flex-col">
      <Navigation />
      <Helmet>
        <title>{t("downtimeNotice.title")}</title>
      </Helmet>
      <div className="flex h-full flex-1 flex-col items-center justify-center p-5 text-center">
        <ErrorLayout>
          <ErrorContainer>
            <IconPill icon={Icons.CIRCLE_EXCLAMATION}>
              P-Stream has a new domain!
            </IconPill>
            <Title>{t("downtimeNotice.title")}</Title>
            <Paragraph>
              You may sign in with your existing account on the new domain!
            </Paragraph>
            <div className="flex justify-center mb-12">
              <Button
                theme="purple"
                onClick={() => {
                  window.location.href = "https://pstream.mov";
                }}
              >
                Go to new domain (pstream.mov)
              </Button>
            </div>
            <SolidSettingsCard
              paddingClass="px-6 py-8"
              className="flex flex-col h-full"
            >
              <div className="flex-grow">
                <Heading3>Local data is missing!</Heading3>
                <p className="text-type-text mt-3">
                  If you did not have an account, you can download your data and
                  upload it to the new domain.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  theme="purple"
                  onClick={() => {
                    window.location.href = "/migration/download";
                  }}
                >
                  Download my data
                </Button>
              </div>
            </SolidSettingsCard>
            <div className="flex justify-center mt-12">
              Help is available on the{" "}
              <span className="text-white">
                <a
                  href={conf().DISCORD_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-type-link"
                >
                  Discord!
                </a>
              </span>
            </div>
            <div className="flex justify-center mt-6">
              This page is temporary. It will be removed in a few days and
              automatically redirect to the new domain. DOWNLOAD YOUR DATA WHILE
              YOU CAN!
            </div>
          </ErrorContainer>
        </ErrorLayout>
      </div>
    </div>
  );
}

export default MaintenancePage;
