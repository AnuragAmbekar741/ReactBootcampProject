import pov1 from './pov.png'
import pov2 from './pov2.png'
import pov3 from './pov3.png'

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
const images = [pov1, pov2, pov3]
var img = document.getElementById("povImg1");

const Pov = () => {

    // setInterval(() => {
    //     for (i = 0; i < images.length; i++) {
    //         img.src = images[i]
    //         if (images.length == 3) {
    //             i = 0
    //         }
    //     }
    // }, 3000)
    return (
        <>
            <div className='povWarp pov1'>
                <img id='povImg1' src={pov1} alt="" />
            </div>
        </>
    )
}

export default Pov;