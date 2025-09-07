import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { pdf } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import { trackDownload } from "./Analytics";

export function PDFExport() {
  const handleDownloadPDF = async () => {
    try {
      toast.info("Génération du PDF en cours...", {
        duration: 2000,
      });

      // Generate PDF blob
      const blob = await pdf(React.createElement(PDFDocument)).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_Manasse_AKPOVI.pdf";

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);

      // Track download
      trackDownload("pdf_cv");

      toast.success("CV téléchargé avec succès !", {
        duration: 4000,
      });
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      toast.error("Erreur lors de la génération du PDF", {
        duration: 4000,
      });
    }
  };

  return (
    <Button
      onClick={handleDownloadPDF}
      variant="outline"
      size="sm"
      className="no-print hover:bg-primary/10 transition-colors"
      aria-label="Télécharger mon CV au format PDF"
    >
      <Download className="w-4 h-4 mr-2" />
      Télécharger en PDF
    </Button>
  );
}
