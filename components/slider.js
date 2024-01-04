"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "./slider.module.scss";

function Slider() {
    const [active, setActive] = useState("1");
    return (
        <div className={styles.slider} data-active={active}>
            <div className={styles.mockup}>
                <Image src="/images/fruits.png" alt="Fruits" width={1004} height={506} unoptimized />
            </div>
            <div className={styles.slides}>
                <div className={`${styles.fruit1} ${styles.slide} `}>Karpuz</div>
                <div className={`${styles.fruit2} ${styles.slide} `}>Limon</div>
                <div className={`${styles.fruit3} ${styles.slide} `}>Çilek</div>
                <div className={`${styles.fruit4} ${styles.slide} `}>Muz</div>
            </div>
            <div className={styles.thumbs}>
                <button onClick={() => setActive("1")} data-no="1">1</button>
                <button onClick={() => setActive("2")} data-no="2">2</button>
                <button onClick={() => setActive("3")} data-no="3">3</button>
                <button onClick={() => setActive("4")} data-no="4">4</button>
            </div>
        </div>
    )
}

export default Slider