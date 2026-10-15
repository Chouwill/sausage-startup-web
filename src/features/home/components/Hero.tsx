import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
    return (
        <>
            <div className='border-3 border mx-auto'>
                <img className='w-full' src="/images/banner.png" alt="首頁橫幅" />

                <button
                    type="button"
                    className="group mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-red-700 px-8 py-3 text-lg font-medium text-white shadow-md transition hover:bg-red-800 hover:shadow-lg absolute left-25 bottom-20"
                >
                    <span>選購商品</span>
                    <FontAwesomeIcon
                        className="text-xl transition-transform group-hover:translate-x-1"
                        icon={faArrowRightLong}
                    />
                </button>
            </div>
        </>
    );
}
