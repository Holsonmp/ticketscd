<template>
        <div class="wrapper">
            <div class="hero-banner">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-8 col-md-10">
                            <div class="hero-banner-content">
                                <h2>Découvrez des événements pour tout ce que vous aimez.</h2>
                                <form class="search-form main-form" method="get">
                                    <div class="row g-3">
                                        <div class="col-lg-5 col-md-12">
                                            <div class="form-group search-category">
                                                <input type="search" name="q" class="form-control h_50" id="search-input" placeholder="Rechercher par artiste, événement ou lieu"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-12">
                                            <div class="form-group">
                                                <select class="selectpicker" data-width="100%" data-size="5" data-live-search="true" name="cat">
                                                    <option value="01" selected>All</option>
                                                    <option value="02">Arts</option>
                                                    <option value="03">Business</option>
                                                    <option value="04">Coaching and Consulting</option>
                                                    <option value="05">Community and Culture</option>
                                                    <option value="06">Education and Training</option>
                                                    <option value="07">Family and Friends</option>
                                                    <option value="08">Fashion and Beauty</option>
                                                    <option value="09">Film and Entertainment</option>
                                                    <option value="10">Food and Drink</option>
                                                    <option value="11">Free</option>
                                                    <option value="12">Health and Wellbeing</option>
                                                    <option value="13">Hobbies and Interest</option>
                                                    <option value="14">Music and Theater</option>
                                                    <option value="15">Religion and Spirituality</option>
                                                    <option value="16">Science and Technology</option>
                                                    <option value="17">Sports and Fitness</option>
                                                    <option value="18">Travel and Outdoor</option>
                                                    <option value="19">Visual Arts</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-12">
                                            <button  type="submit" class="main-btn btn-hover w-100">Find</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="explore-events p-80">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="main-title">
                                <h3 class="all event-box" style="display: block;">Tous les événements</h3>
                                <h3 class="today event-box">Aujourd'hui</h3>
                                <h3 class="tomorrow event-box">Demain</h3>
                                <h3 class="thisWeek event-box">Cette semaine</h3>
                                <h3 class="thisWeekend event-box">Ce week-end</h3>
                                <h3 class="nextWeekend event-box">Le week-end prochain</h3>
                                <h3 class="thisMonth event-box">Ce mois</h3>
                                <h3 class="nextMonth event-box">Le mois prochain</h3>
                                <h3 class="thisYear event-box">Cette année</h3>
                                <h3 class="nextYear event-box">L'année prochaine</h3>
                            </div>


                            <div class="event-filter-items ">
                                <div class="featured-controls">
                                    <div class="filter-tag">
                                        <button type="button" class="control" value="all" data-filter="all">Tous</button>
                                        <button type="button" class="control" value="today" data-filter=".today">Aujourd'hui</button>
                                        <button type="button" class="control" value="tomorrow" data-filter=".tomorrow">Demain</button>
                                        <button type="button" class="control" value="thisWeek" data-filter=".thisWeek">Cette semaine</button>
                                        <button type="button" class="control" value="thisWeekend" data-filter=".thisWeekend">Ce week-end</button>
                                        <button type="button" class="control" value="nextWeekend" data-filter=".nextWeekend">Le week-end prochain</button>
                                        <button type="button" class="control" value="thisMonth" data-filter=".thisMonth">Ce mois</button>									
                                        <button type="button" class="control" value="nextMonth" data-filter=".nextMonth">Le mois prochain</button>
                                        <button type="button" class="control" value="thisYear" data-filter=".thisYear">Cette année</button>
                                        <button type="button" class="control" value="nextYear" data-filter=".nextYear">L'année prochaine</button>	
                                    </div>
                                    <div class="row" data-ref="event-filter-content">
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix today thisWeek" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/concertmoisembiye.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Concert Moïse Mbiye au Stade des Martyrs à Kinshasa</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$100.00*</span>
                                                        <span class="remaining"></span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>30 Oct.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Fri, 3.45 PM</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix tomorrow thisWeekend nextMonth thisYear thisMonth" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-2.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Earrings Workshop with Bronwyn David</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$75.00*</span>
                                                        <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 Restants</span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>30 Apr</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Sat, 11.20 PM</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix nextWeekend nextYear thisWeek nextMonth thisMonth bussiness" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-3.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Conférence Internationale pour la Lutte contre le Cancer en Afrique (CILCA)</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$00.00*</span>
                                                        <span class="remaining"></span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>6 Déc.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Jeudi, à 14:00</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix thisMonth thisWeek nextMonth thisYear nextYear tomorrow" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-4.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Shutter Life</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$85.00</span>
                                                        <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Restants</span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>6 Déc.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Lundi, à 17h30</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix thisWeek thisYear thisMonth nextYear today" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img1.png" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Match RDC vs Maroc au stade des Martyrs</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$4.50*</span>
                                                        <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>206 Restants</span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>30 Oct.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Samedi, à 16h45</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix thisWeekend thisWeek today nextMonth thisYear" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-6.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Step Up Open Mic Show au #ShowBuzz</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$20.00*</span>
                                                        <span class="remaining"></span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>30 Juin</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Mardi, à 18h30</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix nextMonth nextYear thisMonth" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-7.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Tutorial on Canvas Painting for Beginners</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$50.00*</span>
                                                        <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Restants</span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>17 Oct.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Lundi, à 17h30</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix thisYear thisWeek nextMonth today" data-ref="mixitup-target">
                                            <div class="main-card mt-4">
                                                <div class="event-thumbnail">
                                                    <a href="events-details.html" class="thumbnail-img">
                                                        <img src="/assets/images/event-imgs/img-8.jpg" alt="">
                                                    </a>
                                                    <span class="bookmark-icon" title="Bookmark"></span>
                                                </div>
                                                <div class="event-content">
                                                    <a href="events-details.html" class="event-title">Trainee Program on Leadership' 2022</a>
                                                    <div class="duration-price-remaining">
                                                        <span class="duration-price">$120.00*</span>
                                                        <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Restants</span>
                                                    </div>
                                                </div>
                                                <div class="event-footer">
                                                    <div class="event-timing">
                                                        <div class="publish-date">
                                                            <span><i class="icon-calendar me-2"></i>20 Oct.</span>
                                                            <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                            <span>Wed, 11.30 PM</span>
                                                        </div>
                                                        <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-center flex-column mt-60">
                                <div class="pagination justify-center">
                                    <button class="pagination__button button -accent-1 mr-15 -prev">
                                        <i class="icon-arrow-left text-15"></i>
                                    </button>

                                    <div class="pagination__count">
                                        <a href="#">1</a>
                                        <a href="#" class="is-active">2</a>
                                        <a href="#">3</a>
                                        <div>...</div>
                                        <a href="#">20</a>
                                    </div>

                                    <button class="pagination__button button -accent-1 ml-15 -next">
                                        <i class="icon-arrow-right text-15"></i>
                                    </button>
                                </div>

                                <div class="text-14 text-center mt-20">Showing results 1-30 of 1,415</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
<script setup>
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
useHead({
  title: 'Parcourir les événements - Tickets.cd',
  meta: [
    { name: 'description', content: 'Holduix' }
  ],

  script: [
        { src: "/assets/js/jquery.min.js"}
    ]
});

onMounted(() => {
  const { $mixitup, $selectpicker } = useNuxtApp();
  const containerEl = document.querySelector('[data-ref~="event-filter-content"]');
  
  if (containerEl) {
    $mixitup(containerEl, {
      selectors: {
        target: '[data-ref~="mixitup-target"]'
      }
    });
  }
  $(document).ready(function () {
	$(".bookmark-icon, .bookmark-button").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("bookmarked");
		$(this).children(".bookmark-icon").toggleClass("bookmarked");
	});
});

  $selectpicker();
});
</script>