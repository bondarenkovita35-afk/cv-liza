document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll("[data-lang-btn]");
    const printBtn = document.getElementById("printPdf");

    // ====== СЛОВАРЬ ======
    const dict = {
        name: {
            sv: "Yelyzaveta De Lorenzi Turner",
            en: "Yelyzaveta De Lorenzi Turner"
        },
        role: {
            sv: "Legitimerad lärare & modersmålslärare i ryska och ukrainska",
            en: "Qualified teacher & mother-tongue teacher in Russian and Ukrainian"
        },
        location: {
            sv: "Upplands-Bro, Sverige",
            en: "Upplands-Bro, Sweden"
        },
        nav_about: { sv: "Om mig", en: "About" },
        nav_skills: { sv: "Kompetens", en: "Skills" },
        nav_experience: { sv: "Erfarenhet", en: "Experience" },
        nav_education: { sv: "Utbildning", en: "Education" },
        nav_extra: { sv: "Övrigt", en: "Other" },
        btn_pdf: {
            sv: "Ladda ner som PDF",
            en: "Download as PDF"
        },

        contact_title: { sv: "Kontakt", en: "Contact" },
        drivers: { sv: "Körkort B", en: "Driving licence B" },

        short_profile_title: { sv: "Kort profil", en: "Short profile" },
        short_profile: {
            sv: "Legitimerad lärare med bakgrund i biologi, ekologi och psykologi. Erfaren av undervisning i årskurs 5–9 samt arbete som modersmålslärare i ryska och ukrainska. Kreativ, strukturerad och lösningsorienterad.",
            en: "Qualified teacher with a background in biology, ecology and psychology. Experience of teaching grades 5–9 and working as a mother-tongue teacher in Russian and Ukrainian. Creative, structured and solution-oriented."
        },

        it_title: { sv: "Datorkunskaper", en: "Digital skills" },
        chip_ai: { sv: "AI-verktyg", en: "AI tools" },

        lang_title: { sv: "Språkkunskaper", en: "Language skills" },
        lang_sv: {
            sv: "Svenska – avancerad (SIFA, SVA1–SVA3)",
            en: "Swedish – advanced (SIFA, SVA1–SVA3)"
        },
        lang_en: {
            sv: "Engelska – flytande",
            en: "English – fluent"
        },
        lang_uk: {
            sv: "Ukrainska – modersmål",
            en: "Ukrainian – native language"
        },
        lang_ru: {
            sv: "Ryska – modersmål",
            en: "Russian – native language"
        },

        summary_title: {
            sv: "Sammanfattning & mål",
            en: "Summary & goals"
        },
        summary_p1: {
            sv: "Som NO-lärare vill jag ge eleverna nya och intressanta kunskaper inom biologi och naturvetenskap och samtidigt stärka deras nyfikenhet och självförtroende. Med min bakgrund inom ekologi och hållbar utveckling fokuserar jag på miljöfrågor och hur vi kan förstå de ekologiska utmaningar vi står inför.",
            en: "As a science teacher I want to give pupils new and interesting knowledge in biology and natural sciences, while strengthening their curiosity and self-confidence. With my background in ecology and sustainable development I focus on environmental issues and how we can understand the ecological challenges we face."
        },
        summary_p2: {
            sv: "Jag strävar efter att skapa en trygg och inkluderande lärmiljö där elever med olika kulturella och språkliga bakgrunder känner sig delaktiga. Jag vill bidra till skolans utveckling genom undervisning, kollegialt lärande och deltagande i projekt som förbättrar undervisningen.",
            en: "I strive to create a safe and inclusive learning environment where pupils with different cultural and linguistic backgrounds feel involved. I want to contribute to the school's development through teaching, collegial learning and participation in projects that improve education."
        },

        exp_title: {
            sv: "Arbetslivserfarenhet (urval)",
            en: "Work experience (selected)"
        },
        exp1_role: {
            sv: "Modersmålslärare i ryska och ukrainska",
            en: "Mother-tongue teacher in Russian and Ukrainian"
        },
        exp1_place: {
            sv: "Enköpings kommun",
            en: "Enköping municipality"
        },
        exp1_date: {
            sv: "2023-03 – pågående",
            en: "Mar 2023 – present"
        },
        exp1_b1: {
            sv: "Planerar och genomför undervisning i ryska och ukrainska för grundskoleelever.",
            en: "Plans and delivers teaching in Russian and Ukrainian for primary pupils."
        },
        exp1_b2: {
            sv: "Samarbetar med klasslärare för att stödja elevernas språkutveckling.",
            en: "Collaborates with class teachers to support pupils' language development."
        },

        exp2_role: {
            sv: "Ägare, skönhetsföretag",
            en: "Owner, beauty company"
        },
        exp2_place: {
            sv: "ElizabethBeauti Zone, Sverige",
            en: "ElizabethBeauti Zone, Sweden"
        },
        exp2_date: {
            sv: "2019-09 – 2021-03",
            en: "Sep 2019 – Mar 2021"
        },
        exp2_b1: {
            sv: "Ansvarade för bokningar, kundkontakt och genomförande av olika behandlingar.",
            en: "Responsible for bookings, customer contact and performing various treatments."
        },
        exp2_b2: {
            sv: "Utvecklade rutiner för service, kvalitet och kundnöjdhet.",
            en: "Developed routines for service, quality and customer satisfaction."
        },

        exp3_role: {
            sv: "Nageltekniker, egenföretagare",
            en: "Nail technician, self-employed"
        },
        exp3_place: {
            sv: "Kryvyi Rih, Ukraina",
            en: "Kryvyi Rih, Ukraine"
        },
        exp3_date: {
            sv: "2015-05 – 2018-05",
            en: "May 2015 – May 2018"
        },
        exp3_text: {
            sv: "Arbetade som nageltekniker och utbildade mig inom skönhetsvård.",
            en: "Worked as a nail technician and trained within beauty care."
        },

        exp4_role: {
            sv: "Lärare i biologi",
            en: "Biology teacher"
        },
        exp4_place: {
            sv: "Skola i Chervoni Podi, Ukraina",
            en: "School in Chervoni Podi, Ukraine"
        },
        exp4_date: {
            sv: "2013-08 – 2014-12",
            en: "Aug 2013 – Dec 2014"
        },
        exp4_text: {
            sv: "Genomförde och utvecklade biologiundervisning för elever i årskurs 5–9.",
            en: "Planned and delivered biology lessons for pupils in grades 5–9."
        },

        exp5_role: {
            sv: "Grupplärare / praktik",
            en: "Group teacher / internship"
        },
        exp5_place: {
            sv: "Parus & skola nr 65, Kryvyi Rih, Ukraina",
            en: "Parus & School no. 65, Kryvyi Rih, Ukraine"
        },
        exp5_date: {
            sv: "2010–2011",
            en: "2010–2011"
        },
        exp5_text: {
            sv: "Ledde grupper av elever och ansvarade för pedagogiska aktiviteter och observationer i klassrummet.",
            en: "Led groups of pupils and was responsible for pedagogical activities and classroom observations."
        },

        edu_title: { sv: "Utbildning", en: "Education" },
        edu1_role: {
            sv: "Masterexamen i biologi, lärare i biologi och ekologi",
            en: "Master's degree in Biology, teacher in biology and ecology"
        },
        edu1_place: {
            sv: "Kryvyi Rih National University",
            en: "Kryvyi Rih National University"
        },
        edu2_role: {
            sv: "Kandidatexamen, lärare i biologi",
            en: "Bachelor's degree, teacher in biology"
        },
        edu2_place: {
            sv: "Kryvyi Rih National University",
            en: "Kryvyi Rih National University"
        },
        edu3_role: {
            sv: "Allmän grundutbildning & gymnasium",
            en: "Compulsory school & upper secondary school"
        },
        edu3_place: {
            sv: "Skola nr 65, Kryvyi Rih, Ukraina",
            en: "School no. 65, Kryvyi Rih, Ukraine"
        },
        edu4_role: {
            sv: "Svenska språkkurs för akademiker",
            en: "Swedish language course for academics"
        },
        edu4_place: {
            sv: "Stockholms intensivsvenska för akademiker – SIFA",
            en: "Stockholm intensive Swedish for academics – SIFA"
        },
        edu4_text: {
            sv: "Fördjupade studier i svenska språket, med fokus på akademiskt språk och undervisning.",
            en: "Advanced studies in Swedish with focus on academic language and teaching."
        },

        footer_text: {
            sv: "Detta CV är skapat som en digital version för Yelyzaveta De Lorenzi Turner.",
            en: "This CV is created as a digital version for Yelyzaveta De Lorenzi Turner."
        }
    };

    function applyLanguage(lang) {
        document.documentElement.setAttribute("data-lang", lang);

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const entry = dict[key];
            if (entry && entry[lang]) {
                el.innerHTML = entry[lang];
            }
        });

        langButtons.forEach((btn) => {
            const isActive = btn.getAttribute("data-lang-btn") === lang;
            btn.classList.toggle("lang-switch__btn--active", isActive);
        });
    }

    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang-btn");
            applyLanguage(lang);
        });
    });

    // Кнопка "PDF" -> системный диалог печати
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // Стартовый язык
    applyLanguage("sv");
});
