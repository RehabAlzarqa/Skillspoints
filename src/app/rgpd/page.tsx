export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-green-200 via-white to-blue-200">
      <h1 className="text-3xl font-bold mb-6 ">Politique de Confidentialité</h1>
      <p className="text-gray-700 mb-4">
        Cette politique de confidentialité explique comment nous collectons,
        utilisons et protégeons vos données personnelles conformément au
        Règlement Général sur la Protection des Données (RGPD).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Données Collectées</h2>
      <p className="text-gray-700 mb-4">
        Nous collectons uniquement les informations nécessaires au bon
        fonctionnement du service : adresse email, mot de passe, et informations
        liées à votre compte.
      </p>
      <h2 className="text-3xl font-bold mb-6 ">2. Finalité du Traitement</h2>
      <p className="text-gray-700 mb-4">
        Vos données sont utilisées pour créer et gérer votre compte, sécuriser
        l&apos;accès à la plateforme, et améliorer nos services.
      </p>
      <h2 className="text-3xl font-bold mb-6 ">3. Durée de Conservation</h2>
      <p className="text-gray-700 mb-4 ">
        Les données sont conservées tant que votre compte est actif. Vous pouvez
        demander leur suppression à tout moment.
      </p>
      <h2 className="text-3xl font-bold mb-6 ">4. Vos Droits</h2>
      <p className=" text-gray-700 mb-4">
        Conformément au RGPD, vous disposez d’un droit d’accès, de
        rectification, de suppression, de portabilité et d’opposition. Vous
        pouvez exercer ces droits via votre espace personnel ou en nous
        contactant.
      </p>
      <h2 className="text-3xl font-bold mb-6">5. Contact DPO</h2>
      <p className="text-gray-700 mb-6">
        Pour toute question relative à la protection de vos données, vous pouvez
        contacter notre DPO :
      </p>
      <a
        href="mailto:dpo@skillspoints.com"
        className="text-[#000000] underline p-2"
      >
        dpo@skillspoints.com
      </a>
    </div>
  );
}
