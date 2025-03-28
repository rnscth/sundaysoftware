import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Sección de Introducción */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t("title")}</h1>
        <p className="text-lg text-gray-700">{t("introDescription")}</p>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("missionTitle")}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{t("missionDescription")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("visionTitle")}
        </h2>
        <p className="text-lg text-gray-700">{t("visionDescription")}</p>
      </section>

      {/* Sección de Miembros del Equipo */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          {t("teamTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "John Doe", role: "CEO", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", desc: t("member1JobDescription") },
            { name: "Jane Smith", role: "CTO", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", desc: t("member2JobDescription") },
            { name: "Alex Johnson", role: "Lead Developer", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", desc: t("member3JobDescription") },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.img} alt={member.name} />
              <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
              <p className="text-center text-gray-500">{member.role}</p>
              <p className="mt-2 text-center text-gray-700">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Ubicación */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("locationTitle")}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{t("locationDescription")}</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104464.49020597368!2d-115.52815034673692!3d32.61183308801583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xd40033a0e5cdf59a!2sMexicali%2C%20B.C.!5e1!3m2!1ses!2smx!4v1743188444128!5m2!1ses!2smx
            "
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Sección de Información Adicional */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("extraInfoTitle")}
        </h2>
        <p className="text-lg text-gray-700">{t("extraInfoDescription")}</p>
      </section>
    </div>
  );
}
