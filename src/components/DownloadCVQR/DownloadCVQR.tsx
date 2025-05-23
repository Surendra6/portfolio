import { QRCodeSVG } from "qrcode.react";
import { useTheme } from "../../ThemeContext";

interface DownloadCVQRProps {
  cv: string;
}

const DownloadCVQR: React.FC<DownloadCVQRProps> = ({ cv }) => {
  const pdfUrl = `${window.location.origin}/${cv}`;
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Download my CV via QR Code</h3>
      <QRCodeSVG
        value={pdfUrl}
        size={200}
        bgColor={`${theme === "dark" ? "#000000" : "#fff2d8"}`}
        fgColor={`${theme === "dark" ? "#fff2d8" : "#113946"}`}
        level="Q"
      />
      <p
        className={`mx-16 text-sm text-center ${
          theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"
        }`}
      >
        Scan this code with your mobile device to download my CV.
      </p>
    </div>
  );
};

export default DownloadCVQR;
