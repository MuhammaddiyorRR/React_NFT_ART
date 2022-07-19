import React from "react";
import simon from "../img/simon-lee-hbFKxsIqclc-unsplash 1.png";
import lekoArts from "../img/lekoarts-WyPFXoVrGx0-unsplash 1.png";
import lukeJones from "../img/luke-jones-D7Lm00vgJD8-unsplash 1.png";
import warren from "../img/warren-umoh-YmTIxQbQo4I-unsplash 1.png";
import cashMacanaya from "../img/cash-macanaya-jd4rMSCTXlM-unsplash 1.png";
import erickButler from "../img/erick-butler-3XQlnryKz0o-unsplash 1.png";
import bernardoSantos from "../img/bernardo-santos-SE0Uq8N4e_U-unsplash 1.png";
import simonLee from "../img/simon-lee-hbFKxsIqclc-unsplash 1 (1).png";

export default class Bids extends React.Component {
  render() {
    return (    <div class="hot-bids">
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={simon} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">David Art</span>
                    <p><span class="size13">1.2</span><sub>5</sub> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={lekoArts} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Spartan Art</span>
                    <p><span class="size13">1.1</span><sub>5</sub> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={lukeJones} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Balance Stone</span>
                    <p><span class="size13">1.1</span><sub>3</sub> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={warren} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Ghost NFT</span>
                    <p><span class="size13">1.0</span><sub>5</sub> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>


        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={cashMacanaya} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Astronout Art</span>
                    <p><span class="size13">1.01</span> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={erickButler} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Face Blood </span>
                    <p><span class="size13">0.9</span><sup>8</sup> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={bernardoSantos} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Tigers Line</span>
                    <p><span class="size13">0.8</span><sub>7</sub> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
        <div class="hot-bids-card">
            <div class="hot-bids-card-img">
                <img src={simonLee} alt=""/>
            </div>
            <div class="flex">
                <div class="name">
                    <span class="art-name">Monster Art</span>
                    <p><span class="size13">0.<sup>5</sup>2</span> ETH</p>

                </div>
                <div class="card-image">
                    {/* <!-- <img src="./img/david.svg" alt=""> --> */}

                </div>
            </div>
        </div>
    </div>
    );
  }
}
