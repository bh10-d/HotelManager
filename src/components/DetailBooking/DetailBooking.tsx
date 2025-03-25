import React from 'react';
import bookingData from '../../Data/fakedata.json';

interface DetailBookingProps {
  bookingId: string;
  onClose: () => void;
}

const DetailBooking: React.FC<DetailBookingProps> = ({ bookingId, onClose }) => {
  // Tìm booking details từ fakedata.json
  const bookingDetails = bookingData.find(booking => booking.id === booking.id);

  if (!bookingDetails) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Không tìm thấy thông tin đặt phòng</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Chi tiết đặt phòng #{bookingId}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Thông tin phòng */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Thông tin phòng
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-gray-600">Số phòng</p>
              <p className="font-medium">{bookingDetails.nameRoom}</p>
            </div>
            <div>
              <p className="text-gray-600">Trạng thái</p>
              <span className={`px-2 py-1 rounded-full text-sm ${
                bookingDetails.status === false 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {bookingDetails.status}
              </span>
            </div>
          </div>
        </div>

        {/* Thông tin khách hàng */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Thông tin khách hàng
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Tên khách hàng</p>
                <p className="font-medium">{bookingDetails.nameGuest}</p>
              </div>
              <div>
                <p className="text-gray-600">Số điện thoại</p>
                <p className="font-medium">{bookingDetails.quantity}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin đặt phòng */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Thời gian đặt phòng
          </h3>
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-gray-600">Ngày nhận phòng</p>
              <p className="font-medium">{bookingDetails.typeRoom}</p>
            </div>
            <div>
              <p className="text-gray-600">Ngày trả phòng</p>
              <p className="font-medium">{bookingDetails.typeRoom}</p>
            </div>
          </div>
        </div>

        {/* Thông tin thanh toán */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Thông tin thanh toán
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Trạng thái thanh toán</p>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  bookingDetails.typeRoom === 'Paid' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {bookingDetails.typeRoom}
                </span>
              </div>
              <div>
                <p className="text-gray-600">Tổng tiền</p>
                <p className="font-medium text-lg text-blue-600">
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(bookingDetails.id)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Đóng
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailBooking;
