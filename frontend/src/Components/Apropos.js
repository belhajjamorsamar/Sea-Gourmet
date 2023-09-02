import React from 'react';

const Apropos = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="xl:container mx-auto mb-8">
        <div className="bg-green-800 relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-7xl text-white font-serif">
              About Us
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mt-8">
            <h2 className="text-3xl font-semibold">
              Welcome to Mediterranean Sea Gourmet - MSG
            </h2>
            <div className="flex items-center justify-center mt-4">
              <img
                src="/images/logo.svg"
                alt="Company Logo"
                className="w-32 h-32 mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="text-gray-600">
                  We are proud to present to you our company which excels in carrying
                  out complex tasks in the field of supply, and which has disrupted
                  traditional import-export companies. We are a team of experienced and
                  dynamic young professionals, who have not only reached new heights in
                  their respective careers, but also have in-depth knowledge of team
                  dynamics, market trends, client management, and supply.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                <p className="text-gray-600">
                  We are the exclusive importer and sourcing partner for many
                  commodities such as FMCG, oil, fresh vegetables and fruits, food
                  and beverages, fresh seafood, and all grocery items. We live,
                  breathe, and are passionate about products. Through our direct
                  contact with manufacturers, refineries, factories, owners, and
                  agents, we are able to offer goods at the lowest possible price,
                  without disrupting quality standards and lead times.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold">How are we different?</h3>
              <p className="text-gray-600">
                Our working style is simple: quality, best price, reliability, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
