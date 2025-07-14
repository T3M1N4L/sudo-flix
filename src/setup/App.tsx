import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useOnlineListener } from "@/hooks/usePing";
import MaintenancePage from "@/pages/errors/MaintenancePage";
import { LoginPage } from "@/pages/Login";
import { MigrationPage } from "@/pages/migration/Migration";
import { MigrationDirectPage } from "@/pages/migration/MigrationDirect";
import { MigrationDownloadPage } from "@/pages/migration/MigrationDownload";
import { MigrationUploadPage } from "@/pages/migration/MigrationUpload";
import { Layout } from "@/setup/Layout";
import { useHistoryListener } from "@/stores/history";
import { LanguageProvider } from "@/stores/language";

function App() {
  useHistoryListener();
  useOnlineListener();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("downtimeToken");
    if (!sessionToken) {
      sessionStorage.setItem("downtimeToken", "true");
    }
  }, []);

  return (
    <Layout>
      <LanguageProvider />
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Migration pages - awaiting import and export fixes */}
        <Route path="/migration" element={<MigrationPage />} />
        <Route path="/migration/direct" element={<MigrationDirectPage />} />
        <Route path="/migration/download" element={<MigrationDownloadPage />} />
        <Route path="/migration/upload" element={<MigrationUploadPage />} />

        <Route
          path="/"
          element={<MaintenancePage onHomeButtonClick={() => {}} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
