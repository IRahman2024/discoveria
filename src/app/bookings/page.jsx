
export default function BookingForm() {
	return (
	  <div className="min-h-screen bg-gradient-to-r from-green-100 via-white to-green-50 p-6 flex items-center justify-center">
		<div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl">
		  <h1 className="text-4xl font-extrabold text-green-600 text-center mb-8">
			Book Your Stay
		  </h1>
		  <form className="space-y-8">
			{/* Full Name */}
			<div>
			  <label
				htmlFor="name"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Full Name
			  </label>
			  <input
				type="text"
				id="name"
				name="name"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				placeholder="Enter your full name"
				required
			  />
			</div>
  
			{/* Email Address */}
			<div>
			  <label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Email Address
			  </label>
			  <input
				type="email"
				id="email"
				name="email"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				placeholder="Enter your email"
				required
			  />
			</div>
  
			{/* Phone Number */}
			<div>
			  <label
				htmlFor="phone"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Phone Number
			  </label>
			  <input
				type="tel"
				id="phone"
				name="phone"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				placeholder="Enter your phone number"
				required
			  />
			</div>
  
			{/* Check-In and Check-Out Dates */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			  <div>
				<label
				  htmlFor="checkIn"
				  className="block text-sm font-medium text-gray-700 mb-1"
				>
				  Check-In Date
				</label>
				<input
				  type="date"
				  id="checkIn"
				  name="checkIn"
				  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				  required
				/>
			  </div>
			  <div>
				<label
				  htmlFor="checkOut"
				  className="block text-sm font-medium text-gray-700 mb-1"
				>
				  Check-Out Date
				</label>
				<input
				  type="date"
				  id="checkOut"
				  name="checkOut"
				  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				  required
				/>
			  </div>
			</div>
  
			{/* Room Type */}
			<div>
			  <label
				htmlFor="roomType"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Room Type
			  </label>
			  <select
				id="roomType"
				name="roomType"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				required
			  >
				<option value="" disabled>
				  Select a room type
				</option>
				<option value="single">Single Room</option>
				<option value="double">Double Room</option>
				<option value="suite">Suite</option>
			  </select>
			</div>
  
			{/* Guests */}
			<div>
			  <label
				htmlFor="guests"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Number of Guests
			  </label>
			  <input
				type="number"
				id="guests"
				name="guests"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				min="1"
				placeholder="Enter number of guests"
				required
			  />
			</div>
  
			{/* Coupon Code */}
			<div>
			  <label
				htmlFor="couponCode"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Coupon Code (Optional)
			  </label>
			  <input
				type="text"
				id="couponCode"
				name="couponCode"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				placeholder="Enter your coupon code"
			  />
			</div>
  
			{/* Special Requests */}
			<div>
			  <label
				htmlFor="specialRequests"
				className="block text-sm font-medium text-gray-700 mb-1"
			  >
				Special Requests
			  </label>
			  <textarea
				id="specialRequests"
				name="specialRequests"
				rows="4"
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
				placeholder="Any special requests (optional)"
			  />
			</div>
  
			{/* Submit Button */}
			<div>
			  <button
				type="submit"
				className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
			  >
				Book Now
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	);
  }
  