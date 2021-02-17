import React from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const EditProduct = () => {

    const router = useRouter();
    const { query: { id } } = router;

    console.log(id)

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light"> Edit Product </h1>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">

                    <form
                        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
                    // onSubmit={formik.handleSubmit}
                    >

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Product's name"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.name}
                            >

                            </input>

                        </div>

                        {/* {formik.touched.name && formik.errors.name ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">{formik.errors.name}</p>
                            </div>
                        ) : null} */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                                Stock
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="stock"
                                type="number"
                                placeholder="Product's stock"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.stock}
                            >

                            </input>

                        </div>

                        {/* {formik.touched.stock && formik.errors.stock ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">{formik.errors.stock}</p>
                            </div>
                        ) : null} */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Product's price"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.price}
                            >

                            </input>

                        </div>

                        {/* {formik.touched.price && formik.errors.price ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">{formik.errors.price}</p>
                            </div>
                        ) : null} */}

                        <input
                            type="submit"
                            className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-grey-900"
                            value="Edit Product" />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default EditProduct;