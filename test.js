{
    const init = () => {
        function getParam(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }

        // grab params from url
        var utm_source = getParam("utm_source");
        var utm_medium = getParam("utm_medium");
        var utm_campaign = getParam("utm_campaign")
        var utm_coupon = getParam("utm_coupon")

        let params = "";

        if (utm_source || utm_campaign || utm_medium) {
            params = `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
        } else if (utm_coupon) {
            params = `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_coupon=${utm_coupon}`
        }
        /* PUSH UTMS */

        let $shopBtns = document.querySelectorAll('.re-shop');
        let $faqBtns = document.querySelectorAll('.re-faq');
        let $homeBtns = document.querySelectorAll('.re-home');
        let $contactBtns = document.querySelectorAll('.re-contact');
        let $scienceBtns = document.querySelectorAll('.re-science');
        let $blogBtns = document.querySelectorAll('.re-blog');
        let $friendBtns = document.querySelectorAll('.re-friend');


        function getCurrentURLForTally() {
            return window.location.href;
        }

        const urlForTally = getCurrentURLForTally();

        if ($shopBtns) {
            $shopBtns.forEach(shopBtn => {
                shopBtn.href = `/shop?${params}`
            });
        }

        if ($faqBtns) {
            $faqBtns.forEach(faqBtn => {
                faqBtn.href = `/faq?${params}`
            });
        }

        if ($homeBtns) {
            $homeBtns.forEach(homeBtn => {
                homeBtn.href = `/?${params}`
            });
        }

        if ($contactBtns) {
            $contactBtns.forEach(contactBtn => {
                contactBtn.href = `/contact?${params}`
            });
        }

        if ($scienceBtns) {
            $scienceBtns.forEach($scienceBtn => {
                $scienceBtn.href = `/science?${params}`
            });
        }

        if ($blogBtns) {
            $blogBtns.forEach($blogBtn => {
                $blogBtn.href = `/blog?${params}`
            });
        }

        if ($friendBtns) {
            $friendBtns.forEach($friendBtn => {

                if (urlForTally.includes("nl.getxtract")) {
                    $friendBtn.href = `https://tally.so/r/nWJNEP?${params}`;
                    console.log("nl.getxtract");
                } else if (urlForTally.includes("de.getxtract")) {
                    $friendBtn.href = `https://tally.so/r/mRW0dp?${params}`;
                    console.log("de.getxtract");
                } else {
                    $friendBtn.href = `https://tally.so/r/wo9G71?${params}`;
                    console.log("en.getxtract");
                }

            });
        }


        /* BLOG POSTS */

        const $blogPosts = document.querySelectorAll('.blogposts-item');
        const $backBlog = document.querySelector('.blog-back');

        if ($blogPosts) {
            $blogPosts.forEach($blogPost => {
                $blogPost.addEventListener("click", () => {
                    let blogTitle = $blogPost.querySelector(".blogname-span").textContent;
                    window.location.href = `/blog/${blogTitle}?${params}`;
                })
            });
        }

        if ($backBlog) {
            $backBlog.addEventListener("click", () => {
                window.location.href = `/blog?${params}`;
            })
        }

        /* BANNER */

        const $bannerBtn = document.getElementById("bannerBtn");

        const $banner = document.getElementById("banner");

        const closeBanner = () => {
            $banner.style.display = "none";
        }

        if ($bannerBtn) {

            $bannerBtn.addEventListener("click", closeBanner);
        }

        const $closeMenu = document.getElementById('btn-menu-close');
        const $navList = document.getElementById('w-nav-overlay-0');

        /* SHOP PAGE */

        const $productImg = document.getElementById("product-img");
        const $firstImg = document.getElementById("first-img");
        const $secondImg = document.getElementById("second-img");
        const $btnGingerLemon = document.getElementById("btn-ginger-lemon");
        const $btnGrapefruitBlackberry = document.getElementById("btn-grapefruit-blackberry");

        const $optionGingerLemon = document.getElementById("option-ginger");
        const $optionGrapefruitBlackberry = document.getElementById("option-grape");

        const $ingredients = document.getElementById("ingredient-block");
        const $nutritionTable = document.getElementById("nutrition-table");
        const $optbtnGingerLemon = document.getElementById("opt-ginger-lemon");
        const $optGrapefruitBlackberry = document.getElementById("opt-grapefruit-blackberry");

        if ($btnGingerLemon) {
            $btnGingerLemon.hidden = false;
            $btnGrapefruitBlackberry.style.display = "none";
            $optionGingerLemon.style.border = "2px solid #FF4100";
        }

        if ($optbtnGingerLemon) {
            $optGrapefruitBlackberry.style.border = "none";
            $optbtnGingerLemon.style.border = "2px solid #FFFFFF";
        }


        let flavourValue;
        let optionValue;

        let $embedGrapefruitBlackberry = document.getElementById("product-component-1666165564741");

        const toggleMenu = () => {
            console.log($navList)

        }

        if ($closeMenu) {

            $closeMenu.addEventListener('click', toggleMenu);

        }

        const checkFlavours = (e) => {
            flavourValue = document.querySelector("input[type='radio'][name=flavour]:checked").value;

            switch (flavourValue) {
                case 'ginger-lemon':
                    console.log("ginger", flavourValue);
                    $btnGingerLemon.hidden = false;
                    $btnGrapefruitBlackberry.style.display = "none";
                    $productImg.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e5316ad0289bef83ce_img-product-gingerlime.png";
                    $productImg.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e5316ad0289bef83ce_img-product-gingerlime.png";

                    if ($firstImg) {
                        $firstImg.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e5316ad0289bef83ce_img-product-gingerlime.png";
                        $firstImg.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e5316ad0289bef83ce_img-product-gingerlime.png";

                        $secondImg.src = "https://uploads-ssl.webflow.com/6375101cce5b78558e6e7185/6375f91739eac4ffe7e9094a_0B5A5179.jpg";
                        $secondImg.srcset = "https://uploads-ssl.webflow.com/6375101cce5b78558e6e7185/6375f91739eac4ffe7e9094a_0B5A5179.jpg";
                    }

                    $optionGrapefruitBlackberry.style.border = "none";
                    $optionGingerLemon.style.border = "2px solid #FF4100";

                    // $embedGrapefruitBlackberry.removeChild($embedGrapefruitBlackberry.children[0]);
                    // $embedGrapefruitBlackberry.removeChild($embedGrapefruitBlackberry.children[0]);
                    break;
                case 'grapefruit-blackberry':
                    console.log("grape", flavourValue);
                    $btnGingerLemon.hidden = true;
                    $btnGrapefruitBlackberry.style.display = "block";
                    reloadScript();
                    $productImg.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e66f6b026d23b370a2_img-product-grapefruitblackberry.png";
                    $productImg.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e66f6b026d23b370a2_img-product-grapefruitblackberry.png";

                    if ($firstImg) {
                        $firstImg.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e66f6b026d23b370a2_img-product-grapefruitblackberry.png";
                        $firstImg.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/634d52e66f6b026d23b370a2_img-product-grapefruitblackberry.png";

                        $secondImg.src = "https://uploads-ssl.webflow.com/6375101cce5b78558e6e7185/6375f6c2cbef958054e51114_0B5A5110.jpg";
                        $secondImg.srcset = "https://uploads-ssl.webflow.com/6375101cce5b78558e6e7185/6375f6c2cbef958054e51114_0B5A5110.jpg";
                    }

                    $optionGrapefruitBlackberry.style.border = "2px solid #FF4100";
                    $optionGingerLemon.style.border = "none";

                    // $embedGrapefruitBlackberry = document.getElementById("product-component-1666008876091");
                    $embedGrapefruitBlackberry.removeChild($embedGrapefruitBlackberry.children[0]);
                    break;
            }
        }

        const $flavours = document.querySelectorAll('input[name="flavour"]');
        for (const flavour of $flavours) {
            flavour.addEventListener('change', checkFlavours);

        }

        const checkOptions = (e) => {
            optionValue = document.querySelector("input[type='radio'][name=option]:checked").value;

            switch (optionValue) {
                case 'ginger-lemon':
                    $nutritionTable.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/63511e53e13aa7311893e26f_nutrition%20Ginger.svg";
                    $nutritionTable.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/63511e53e13aa7311893e26f_nutrition%20Ginger.svg";
                    $optGrapefruitBlackberry.style.border = "none";
                    $optbtnGingerLemon.style.border = "1px solid #FFFFFF";
                    $ingredients.innerHTML = "Ingredients: water, sugar, ginger extract powder(0.6%), lemon extract powder (1.5%), green tea dry extract (0.4%), olive leaf extract (Olea Europea)(0.77%), acidifier (citric acid), tripotassium citrate, antioxidant (ascorbic acid), magnesium (0.93%), vitamin B6, natural flavourings.";
                    break;

                case 'grapefruit-blackberry':
                    $nutritionTable.src = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/63511e519c111155965d92cd_nutrition%20Grapefruit.svg";
                    $nutritionTable.srcset = "https://uploads-ssl.webflow.com/63490844110bde0b38588ea8/63511e519c111155965d92cd_nutrition%20Grapefruit.svg";
                    $optGrapefruitBlackberry.style.border = "1px solid #FFFFFF";
                    $optbtnGingerLemon.style.border = "none";
                    $ingredients.innerHTML = "Ingredients: water, sugar, pink grapefruit extract powder (1.1%), blackberry extract powder (1.1%), green tea dry extract (0.4%), olive leaf extract (Olea Europea)(0.77%), acidifier (citric acid), tripotassium citrate, antioxidant (ascorbic acid), magnesium (0.92%), vitamin B6, natural flavourings.";
                    break;
            }
        }


        const $options = document.querySelectorAll('input[name="option"]');
        for (const options of $options) {
            options.addEventListener('change', checkOptions);


        }
    }




    function reloadScript() {
        var client = ShopifyBuy.buildClient({
            domain: 'checkout.getxtract.co',
            storefrontAccessToken: '16d2bd58f14ad9f412c239993749ab8c',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '7913480585433',
                node: document.getElementById('product-component-1666165564741'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: false,
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            "button": {
                                "padding": "12px 20px",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#dc4524"
                                },
                                "background-color": "#f44d28",
                                ":focus": {
                                    "background-color": "#dc4524"
                                },
                                "border-radius": "40px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "button": false,
                            "buttonWithQuantity": true,
                            "title": false,
                            "price": false
                        },
                        "events": {
                            addVariantToCart: function (product) {
                                _gaq.push(['_trackEvent', 'click', 'addtocart'])
                                console.log("added to cart");
                            }
                        },
                        "text": {
                            "button": () => {
                                function getCurrentURL() {
                                    return window.location.href
                                }

                                const url = getCurrentURL();

                                if (url.includes("nl")) {
                                    return "TOEVOEGEN AAN WINKELMANDJE"
                                } else if (url.includes("de")) {
                                    return "ZUM WARENKORB HINZUFÜGEN"
                                } else {
                                    return "ADD TO CART"
                                }
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "padding": "12px 20px",
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "padding": "12px 20px",
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "padding": "12px 20px",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#dc4524"
                                },
                                "background-color": "#f44d28",
                                ":focus": {
                                    "background-color": "#dc4524"
                                },
                                "border-radius": "40px"
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "events": {
                            afterInit: (cart) => {
                                cart.onCheckout = () => {
                                    function getCurrentURL() {
                                        return window.location.href
                                    }

                                    const url = getCurrentURL();
                                    let freakylocation = "en";

                                    if (url.includes("nl")) {
                                        freakylocation = "nl";
                                        console.log(url, freakylocation);
                                    } else if (url.includes("de")) {
                                        freakylocation = "de";
                                        console.log(url, freakylocation);
                                    } else {
                                        freakylocation = "en";
                                        console.log(url, freakylocation);
                                    }
                                    // const checkoutUrl = cart.model.webUrl + `&locale=${freakylocation}`;
                                    const checkoutUrl = cart.model.webUrl + '&' + 'utm_source=test&utm_medium=test&utm_campaign=test&utm_content=test&utm_term=test';
                                    cart.checkout.open(checkoutUrl);
                                };
                            },
                        },
                        "styles": {
                            "button": {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#dc4524"
                                },
                                "background-color": "#f44d28",
                                ":focus": {
                                    "background-color": "#dc4524"
                                },
                                "border-radius": "40px"
                            },
                            "title": {
                                "color": "#161414"
                            },
                            "header": {
                                "color": "#161414"
                            },
                            "lineItems": {
                                "color": "#161414"
                            },
                            "subtotalText": {
                                "color": "#161414"
                            },
                            "subtotal": {
                                "color": "#161414"
                            },
                            "notice": {
                                "color": "#161414"
                            },
                            "currency": {
                                "color": "#161414"
                            },
                            "close": {
                                "color": "#161414",
                                ":hover": {
                                    "color": "#161414"
                                }
                            },
                            "empty": {
                                "color": "#161414"
                            },
                            "noteDescription": {
                                "color": "#161414"
                            },
                            "discountText": {
                                "color": "#161414"
                            },
                            "discountIcon": {
                                "fill": "#161414"
                            },
                            "discountAmount": {
                                "color": "#161414"
                            },
                            "cart": {
                                "background-color": "#fefcf7"
                            },
                            "footer": {
                                "background-color": "#fefcf7"
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "popup": false
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-weight": "bold",
                                "background-color": "#f44d28",
                                ":hover": {
                                    "background-color": "#dc4524"
                                },
                                ":focus": {
                                    "background-color": "#dc4524"
                                }
                            }
                        }
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#161414"
                            },
                            "title": {
                                "color": "#161414"
                            },
                            "price": {
                                "color": "#161414"
                            },
                            "fullPrice": {
                                "color": "#161414"
                            },
                            "discount": {
                                "color": "#161414"
                            },
                            "discountIcon": {
                                "fill": "#161414"
                            },
                            "quantity": {
                                "color": "#161414"
                            },
                            "quantityIncrement": {
                                "color": "#161414",
                                "border-color": "#161414"
                            },
                            "quantityDecrement": {
                                "color": "#161414",
                                "border-color": "#161414"
                            },
                            "quantityInput": {
                                "color": "#161414",
                                "border-color": "#161414"
                            }
                        }
                    }
                },
            });
        });
    }

    init();
}