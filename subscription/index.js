{
    const checkTastes = (e) => {
        flavourValue = document.querySelector("input[type='radio'][name=flavour]:checked").value;
        $subscribeBtn = document.getElementById("subscribe-btn");

        switch (flavourValue) {
            case 'ginger-lemon':
                $subscribeBtn.href = "https://checkout.getxtract.co/products/ginger-lemon?variant=43415175397593&selling_plan=3234693337";
                break;
            case 'grapefruit-blackberry':
                $subscribeBtn.href = "https://checkout.getxtract.co/products/grapefruit-blackberry?variant=43415189192921&selling_plan=3234693337";
                break;
        }
    }

    const $tastes = document.querySelectorAll('input[name="flavour"]');
    for (const taste of $tastes) {
        taste.addEventListener('change', checkTastes);

    }
}