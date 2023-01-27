{
    console.log('price activated');

    function getCoupon(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }
    let utm_coupon = getCoupon("utm_coupon").toUpperCase();
    let utm_campaignPrice = getCoupon("utm_campaign");

    console.log("coupon:", utm_coupon);
    console.log("campaign:", utm_campaignPrice);

    function getCurrentURLForTranslate() {
        return window.location.href;
    }

    const urlForTranslate = getCurrentURLForTranslate();

    let bannerElement = {
        bannerText: document.getElementById('banner-text'),
        couponText: document.getElementById('coupon-text'),
        couponBanner: document.getElementById('coupon-banner'),
        banner: document.querySelector('.banner')
    }

    if (utm_coupon === "") {
        if (bannerElement.bannerText) {
            if (urlForTranslate.includes("nl.getxtract")) {
                bannerElement.bannerText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
            } else if (urlForTranslate.includes("de.getxtract")) {
                bannerElement.bannerText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
            } else {
                bannerElement.bannerText.innerHTML = "Free shipping with code" + "\u00A0" + "<b style='color: #FF2E00;'>FREESHIPPING</b>";
            }
        }

        if (bannerElement.couponText) {
            if (urlForTranslate.includes("nl.getxtract")) {
                bannerElement.couponText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b>FREESHIPPING</b>`;
            } else if (urlForTranslate.includes("de.getxtract")) {
                bannerElement.couponText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b>FREESHIPPING</b>`;
            } else {
                bannerElement.couponText.innerHTML = "Free shipping with code <b>FREESHIPPING</b>";
            }
        }

        if (bannerElement.couponBanner) {
            bannerElement.couponBanner.style.display = "inline-block";
        }
    } else {

        switch (utm_coupon) {
            case 'FREESHIPPING25':
                if (bannerElement.bannerText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING25</b> (vanaf €25)`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING25</b> (ab einem Warenwert von 25€)`;
                    } else {
                        bannerElement.bannerText.innerHTML = 'Free shipping with code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING25</b> (spend €25)`;
                    }
                }

                if (bannerElement.couponText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b>FREESHIPPING25</b> (vanaf €25)`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b>FREESHIPPING25</b> (ab einem Warenwert von 25€)`;
                    } else {
                        bannerElement.couponText.innerHTML = "Free shipping with code: <b>FREESHIPPING25</b> (spend €25)";
                    }

                }

                if (bannerElement.couponBanner) {
                    bannerElement.couponBanner.style.display = "inline-block";
                }
                break;

            case '25FORYOU':
                if (bannerElement.bannerText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.bannerText.innerHTML = '25% korting met code:' + '\u00A0' + `<b style='color: #FF2E00;'>25FORYOU</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Erhalte 25% Rabatt mit dem Code:' + '\u00A0' + `<b  style='color: #FF2E00;'>25FORYOU</b>`;
                    } else {
                        bannerElement.bannerText.innerHTML = "Get 25% OFF with code" + "\u00A0" + `<b style='color: #FF2E00;'>25FORYOU</b>`;
                    }
                }
                if (bannerElement.couponText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.couponText.innerHTML = '25% korting met code:' + '\u00A0' + `<b style='color: #FF2E00;'>25FORYOU</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Erhalte 25% Rabatt mit dem Code:' + '\u00A0' + `<b>25FORYOU</b>`;
                    } else {
                        bannerElement.couponText.innerHTML = "Get 25% off with code <b>25FORYOU</b>";
                    }
                }

                if (bannerElement.couponBanner) {
                    bannerElement.couponBanner.style.display = "inline-block";
                }
                break;

            case 'FREESHIPPING':
                if (bannerElement.bannerText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b  style='color: #FF2E00;'>FREESHIPPING</b>`;
                    } else {
                        bannerElement.bannerText.innerHTML = "Free shipping with code" + "\u00A0" + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
                    }
                }

                if (bannerElement.couponText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b>FREESHIPPING</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b >FREESHIPPING</b>`;
                    } else {
                        bannerElement.couponText.innerHTML = "Free shipping with code <b>FREESHIPPING</b>";
                    }
                }

                if (bannerElement.couponBanner) {
                    bannerElement.couponBanner.style.display = "inline-block";
                }
                break;


            case 'SHIP4':
                if (bannerElement.bannerText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.bannerText.innerHTML = '20% korting met code:' + '\u00A0' + `<b style='color: #FF2E00;'>OFF20</b> & gratis verzending met code: <b style='color: #FF2E00;'>SHIP4</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Erhalte 20% Rabatt mit dem Code:' + '\u00A0' + `<b  style='color: #FF2E00;'>OFF20</b> und eine kostenlose Lieferung mit dem Code: ` + '\u00A0' + `<b  style='color: #FF2E00;'>SHIP4</b>`;
                    } else {
                        bannerElement.bannerText.innerHTML = "Get 20% off with code:" + "\u00A0" + `<b style='color: #FF2E00;'>OFF20</b> & free delivery with code: <b style='color: #FF2E00;'>SHIP4</b>`;
                    }
                }

                if (bannerElement.couponText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.couponText.innerHTML = "20% korting met code: <b>OFF20</b> & gratis verzending met code: <b>SHIP4</b><br/>(vanaf 4 producten)";
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Erhalte 20% Rabatt mit dem Code:' + '\u00A0' + `<b>OFF20</b> und eine kostenlose Lieferung mit dem Code: ` + '\u00A0' + `<b>SHIP4</b><br/>(Kaufe 4 Produkte)`;
                    } else {
                        bannerElement.couponText.innerHTML = "Get 20% off with code: <b>OFF20</b> & free delivery with code: <b>SHIP4</b><br/>(buy 4 products)";
                    }
                }

                if (bannerElement.couponBanner) {
                    bannerElement.couponBanner.style.display = "inline-block";
                }
                break;

            default:
                if (bannerElement.bannerText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.bannerText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b style='color: #FF2E00;'>FREESHIPPING</b>`;
                    } else {
                        bannerElement.bannerText.innerHTML = "Free shipping with code" + "\u00A0" + "<b style='color: #FF2E00;'>FREESHIPPING</b>";
                    }
                }
        
                if (bannerElement.couponText) {
                    if (urlForTranslate.includes("nl.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Gratis verzending met code:' + '\u00A0' + `<b>FREESHIPPING</b>`;
                    } else if (urlForTranslate.includes("de.getxtract")) {
                        bannerElement.couponText.innerHTML = 'Kostenlose Lieferung mit dem Code:' + '\u00A0' + `<b>FREESHIPPING</b>`;
                    } else {
                        bannerElement.couponText.innerHTML = "Free shipping with code <b>FREESHIPPING</b>";
                    }
                }
                if (bannerElement.couponBanner) {
                    bannerElement.couponBanner.style.display = "inline-block";
                }
        }
    }

    if (utm_campaignPrice === "pricing-general-nl" || utm_campaignPrice === "pricing-general-de") {

        if (bannerElement.bannerText) {
            bannerElement.bannerText.style.display = "none";
        }
        if (bannerElement.couponText) {
            bannerElement.couponText.style.display = "none";
        }

        if (bannerElement.couponBanner) {
            bannerElement.couponBanner.style.display = "none";
        }

        if (bannerElement.banner) {
            bannerElement.banner.style.display = "none";
        }
    }

}