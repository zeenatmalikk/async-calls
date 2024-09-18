import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slices/apiSlice';

const Post = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Fetched Data</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-lg">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
