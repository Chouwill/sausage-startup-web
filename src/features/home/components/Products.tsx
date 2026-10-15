import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const products = [
    {
        id: 1,
        name: '莊婆婆湘味香腸(辣味)',
        price: 'NT358/1包',
        weight: '300G(約5-6條)',
        image: '/images/product-4.png',
    },
    {
        id: 2,
        name: '莊婆婆湘味香腸(原味)',
        price: 'NT358/1包',
        weight: '300G(約5-6條)',
        image: '/images/product-1.png',
    },
    {
        id: 3,
        name: '莊婆婆湘味香腸(盒裝)',
        price: 'NT699/1盒',
        weight: '600G(約10-12條)',
        image: '/images/product-3.png',
    },
    {
        id: 4,
        name: '莊婆婆湘味香腸(袋裝)',
        price: 'NT358/1包',
        weight: '300G(約5-6條)',
        image: '/images/product-2.png',
    },
];

export default function Products() {
    return (
        <section>
            <h2 className="text-center text-5xl p-9">熱門商品</h2>
            <div className="flex justify-center items-center gap-15">
                {products.map(function (product) {
                    return (
                        <div
                            key={product.id}
                            className="w-[15%] max-h-112.5 rounded-md flex flex-col gap-3  items-center"
                        >
                            <div className="w-full aspect-square overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3>{product.name}</h3>
                            <h4>{product.price}</h4>
                            <span>{product.weight}</span>
                            <button
                                type="button"
                                className="group mb-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-red-700 px-5 py-2 font-medium text-white shadow-sm transition hover:bg-red-800 hover:shadow-md"
                            >
                                <FontAwesomeIcon
                                    className="text-lg transition-transform group-hover:scale-110"
                                    icon={faCartShopping}
                                />
                                <span>加入購物車</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
