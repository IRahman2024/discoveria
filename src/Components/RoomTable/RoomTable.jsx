import React from 'react';
import roomDatas from '../../../data/roomData.json'

const RoomTable = ({ room }) => {

    // id, name, description, pricePerNight, capacity, rating
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Room Name</th>
                            <th>Capacity</th>
                            <th>Rating</th>
                            <th>Price per Night</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            room.map((data, idx) => <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.capacity}
                                </td>
                                <td>{data.rating}</td>
                                <td>{data.pricePerNight}</td>
                                <td >
                                    <button
                                        onClick={() => handleDelete(data._id)}
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

export default RoomTable;