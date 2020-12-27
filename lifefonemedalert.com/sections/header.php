<header class="hdr flex a-center">
  <div class="container">
    <div class="row a-center">
        <div class="col-6 col-md-9">
            <div class="hdr-icon"></div>
        </div>
        <div class="col-6 col-md-3">
            <?php if(!$off_hours) { ?>
                <a href="tel:<?php echo $phone?>">
                    <div class="hdr__btn flex a-end j-center">
                        <div class="hdr__btn-icon"></div>
                        <div class="hdr__btn-box">
                            <div class="hdr__btn-info">Call to get a free quote!</div>
                            <div class="hdr__btn-number"><?php echo $phone?></div>
                        </div>
                    </div>
                </a>
            <?php } ?>
        </div>
    </div>
  </div>
</header>
<section class="banner-mob <?php echo $thanks ? 'd-none' : 'd-md-none'?> flex a-center ">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="banner-mob__title">Call to get FREE MONTH + FREE SHIPPING<sup>†</sup></div>
                <div class="banner-mob__subtitle"><sup>†</sup>On Annnual & Quarterly Plans. New customers only.</div>
            </div>
        </div>
    </div>
</section>
