const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8">

      {/* Titre */}
      <h1 className="text-2xl font-bold">Contactez-nous</h1>
      

      {/* Infos contact */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>📞 Téléphone : +221 78 125 73 71</p>
        <p>📧 Email : contact@kaaynduggu.com</p>
        <p>📍 Adresse : Dakar, Sénégal</p>
      </div>

      {/* Carte */}
      <div className="w-full h-96 rounded overflow-hidden shadow">
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30889.958789472454!2d-17.39016900303437!3d14.585119225228114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10b47b6b25bcd%3A0x93fc379138ad34b2!2sGu%C3%A9diawaye!5e0!3m2!1sfr!2ssn!4v1776979857773!5m2!1sfr!2ssn" 
          width="100%"
          height="100%"
         style={{ border: 0 }}
        loading="lazy"
       allowFullScreen
></iframe>
      </div>

      {/* WhatsApp direct */}
      <a
      href="https://wa.me/221781257371?text=Bonjour%20Kaay%20Nduggu%2C%20je%20souhaite%20vous%20contacter%20pour%20une%20question%20ou%20une%20commande."
        target="_blank"
        className="block text-center bg-[#75ab3f] text-white py-3 rounded font-bold"
      >
        Nous écrire sur WhatsApp
      </a>

    </div>
  );
};

export default ContactPage;