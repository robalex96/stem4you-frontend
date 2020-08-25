import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const ActivityScreen = () => {
    const [information, setInformation] = useState(false);
    const { currentActivity } = useSelector(state => state.activity);
    const [image, setImage] = useState(1);
    const [imageUrl, setImageUrl] = useState(`${ currentActivity.link }${ currentActivity.activity }/${ image }.png`);

    const handleNext = () => {
        setImage(image => {
            return image < currentActivity.quantity ? image + 1 : 1
        });
        setImageUrl(`${ currentActivity.link }${ currentActivity.activity }/${ image }.png`);
    }

    return (
        <div>
            {
                information 
                ?   <div>
                        <div className="activities__boxinfo pointer">
                            <span className="material-icons fl">help </span>
                        </div>
                        <div className="activities__boxinfocont">
                            <div className="activities__btnback">
                                <span className="material-icons fl">highlight_off </span>
                            </div>
                            <div className="activities__activity-information">
                                <p className="activities__title-info">Nuestro sistema solar</p>
                                <p className="activities__text-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                </p>
                                <p className="activities__text-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione eligendi repudiandae natus deserunt ex quasi? Quasi deserunt unde quisquam vero. Doloremque, modi nisi velit est in impedit quasi quos.
                                </p>
                            </div>
                        </div>
                    </div>
                :   <div>
                        <div className="activities__activity">
                            <p className="activities__activity-subtitle">
                                Nuestro
                            </p>
                            <p className="activities__activity-title">
                                SISTEMA SOLAR
                            </p>
                        </div>
                        <div className="activities__activity-frame">
                            <img src={imageUrl} alt="" />
                        </div>
                        <div 
                            className="activities__activity-btnnx pointer"
                            onClick={ handleNext }
                        >
                            Siguiente
                        </div>
                    </div>
            }
        </div> 
    )
}
