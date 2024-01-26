import React from 'react'

function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide mb-3">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?w=1800&t=st=1706295210~exp=1706295810~hmac=5269948076edc0637571224ef7c69e2e141059b722f6075d33abcd8f722f884a" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-vector/horizontal-cinema-special-offer-web-banner-with-realistic-clapper-popcorn-3d-glasses-color-background-vector-illustration_1284-77080.jpg?w=1380&t=st=1706295321~exp=1706295921~hmac=171e043b0303db7277adf9c76e0e60dbf790a179dff4cf5149f60eb21e8eccbb" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-vector/flat-design-cinema-festival-facebook-cover_23-2149934023.jpg?w=1380&t=st=1706295363~exp=1706295963~hmac=69fd2d6d030bdfa6c64746b38e6a149caf0c03cac76ff88fdcdd4918a5b04c6b" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider