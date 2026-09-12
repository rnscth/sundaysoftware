import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("pages.about.title"),
    description: t("pages.about.description"),
  };
}

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-deep-slate mb-4">{t("title")}</h1>
        <p className="text-lg text-mid-slate max-w-2xl mx-auto">{t("introDescription")}</p>
      </section>

      <section className="mb-16 bg-card-surface p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-deep-slate mb-4">
          {t("missionTitle")}
        </h2>
        <p className="text-lg text-mid-slate mb-6 max-w-2xl">{t("missionDescription")}</p>

        <h2 className="text-2xl font-semibold text-deep-slate mb-4">
          {t("visionTitle")}
        </h2>
        <p className="text-lg text-mid-slate max-w-2xl">{t("visionDescription")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-deep-slate mb-8">
          {t("capabilitiesTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: t("capability1Title"),
              desc: t("capability1Description"),
            },
            {
              title: t("capability2Title"),
              desc: t("capability2Description"),
            },
            {
              title: t("capability3Title"),
              desc: t("capability3Description"),
            },
          ].map((capability, index) => (
            <div
              key={index}
              className="bg-card-surface p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-[box-shadow,transform] duration-300 ease-smooth"
            >
              <h3 className="text-xl font-semibold text-center text-deep-slate">
                {capability.title}
              </h3>
              <p className="mt-2 text-center text-mid-slate">{capability.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-card-surface p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-deep-slate mb-4">
          {t("locationTitle")}
        </h2>
        <p className="text-lg text-mid-slate mb-6 max-w-2xl">{t("locationDescription")}</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104464.49020597368!2d-115.52815034673692!3d32.61183308801583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xd40033a0e5cdf59a!2sMexicali%2C%20B.C.!5e1!3m2!1ses!2smx!4v1743188444128!5m2!1ses!2smx
            "
            title={t("locationTitle")}
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-deep-slate mb-4">
          {t("extraInfoTitle")}
        </h2>
        <p className="text-lg text-mid-slate max-w-2xl mx-auto">{t("extraInfoDescription")}</p>
      </section>
    </div>
  );
}
