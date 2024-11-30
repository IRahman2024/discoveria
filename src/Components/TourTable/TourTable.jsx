import React from 'react';


const TourTable = ({ tour }) => {

    // title, price
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tour Package Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            tour.map((data, idx) => <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {data.title}
                                </td>
                                <td>{data.price}</td>
                                <td >
                                    <button
                                        // onClick={() => handleDelete(data._id)}
                                        className="btn btn-xs btn-error">Cancel</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourTable;