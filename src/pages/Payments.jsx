import React from "react";
import Banner from "../components/Banner";
import {
  FaUniversity,
  FaMoneyCheckAlt,
  FaEnvelope,
  FaBitcoin,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const Payments = () => {
  return (
    <div>
      {/* Hero Section */}
      <Banner headline={'Payment Bank Details'} para={'Welcome to our Payment Information page. Please select the correct regional account before making any payments.'}/>

      {/* Make Payment Info */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <MdPayments className="text-6xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Make a Payment for Services
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing our Amazon Consulting services. We accept
            payments via bank transfer and secure online methods. Kindly choose
            the method that suits your region and convenience.
          </p>
          <p className="text-red-600 font-semibold">
            Note: Only send from your business account otherwise payment will be
            cancelled.
          </p>
        </div>
      </section>

      {/* Bank Accounts Grid */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Regional Bank Accounts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* USA Market */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">USA Market</h3>
            <p>
              <strong>Bank:</strong> First Century Bank
            </p>
            <p>
              <strong>Routing:</strong> 061120084
            </p>
            <p>
              <strong>Account No:</strong> 4023553296901
            </p>
            <p>
              <strong>Type:</strong> Checking
            </p>
            <p>
              <strong>Beneficiary:</strong> Muhammad Tahir Saeed
            </p>
          </div>

          {/* UK Market */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UK Market</h3>
            <p>
              <strong>Bank:</strong> Barclays
            </p>
            <p>
              <strong>Sort code:</strong> 231486
            </p>
            <p>
              <strong>Account No:</strong> 08182062
            </p>
            <p>
              <strong>Beneficiary:</strong> Muhammad Tahir Saeed
            </p>
          </div>

          {/* Australia Market */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Australia Market</h3>
            <p>
              <strong>Bank:</strong> Citibank
            </p>
            <p>
              <strong>Branch code:</strong> 248024
            </p>
            <p>
              <strong>Account No:</strong> 10598496
            </p>
            <p>
              <strong>Beneficiary:</strong> Muhammad Tahir Saeed
            </p>
          </div>

          {/* Canada Market */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Canada Market</h3>
            <p>
              <strong>Bank:</strong> Citibank NA Canadian Branch
            </p>
            <p>
              <strong>Transit:</strong> 20012
            </p>
            <p>
              <strong>Account No:</strong> 3001430223
            </p>
            <p>
              <strong>Beneficiary:</strong> Muhammad Tahir Saeed
            </p>
          </div>

          {/* Pakistan UBL */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pakistan (UBL)</h3>
            <p>
              <strong>Title:</strong> Ali Raza
            </p>
            <p>
              <strong>Bank:</strong> UBL
            </p>
            <p>
              <strong>Account No:</strong> 0603296148925
            </p>
            <p>
              <strong>IBAN:</strong> PK67UNIL0109000296148925
            </p>
          </div>

          {/* Pakistan Meezan */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <FaUniversity className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pakistan (Meezan)</h3>
            <p>
              <strong>Bank:</strong> Meezan Bank
            </p>
            <p>
              <strong>Account No:</strong> 0111775448
            </p>
            <p>
              <strong>IBAN:</strong> PK91MEZN0076020111775448
            </p>
            <p>
              <strong>Title:</strong> ECOMPEARLS (PVT) LTD
            </p>
          </div>
        </div>
      </section>

      {/* Other Payment Methods */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Payment Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaMoneyCheckAlt className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white">Payoneer</h3>
            <p className="text-white">tahir.saeed0870@gmail.com</p>
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaBitcoin className="text-5xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white">Binance</h3>
            <p className="text-white">ID: 415946024</p>
            <p className="text-white">User: tahir0870</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaEnvelope className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white">Need Help?</h3>
            <p className="text-white">ceo@ecompearls.org</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
