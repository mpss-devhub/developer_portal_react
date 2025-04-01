import React from "react";
import Layout from "../layout/Layouts";

const Wordpress = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/octoverse_woocommerce_plugin.zip";
    link.download = "octoverse_woocommerce_plugin.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <main className="bg-white py-4">
        <div className="shadow-md mx-auto max-w-screen-xl">
          <div className="w-full mx-auto p-6">
            <h2 className="mb-6 text-2xl font-semibold">
              Boost Your WooCommerce Store with <br />
              <span>Octoverse Payment Gateway Plugin</span>
            </h2>
            <hr className="border border-[#ED2668] mb-4" />
            <h3 className="text-md font-semibold">
              Secure, Fast, and Reliable Payment Solutions for Your Online Store
            </h3>
            <p className="mt-6 text-base">
              Are you looking to streamline your payment processes and provide
              your customers with a seamless shopping experience?
              <span className="font-semibold">
                The Octoverse Payment Gateway Plugin
              </span>{" "}
              for WooCommerce is here to take your online store to the next
              level!
            </p>

            <section className="mt-5">
              <h3 className="text-lg font-semibold">
                Why Choose Octoverse Payment Gateway?
              </h3>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li className="text-md">
                  <strong>Seamless Integration:</strong> Easily integrate with
                  WooCommerce without complicated configurations.
                </li>
                <li className="text-md">
                  <strong>Fast Transactions:</strong> Ensure fast and secure
                  payment processing for your customers.
                </li>
                <li className="text-md">
                  <strong>Multiple Payment Options:</strong> Accept payments
                  from a variety of sources including credit cards and digital
                  wallets.
                </li>
                <li className="text-md">
                  <strong>Global Reach:</strong> Expand your reach to customers
                  around the world with international payment capabilities.
                </li>
                <li className="text-md">
                  <strong>Security & Reliability:</strong> Built with high
                  security to ensure your customers' data is always protected.
                </li>
                <li className="text-md">
                  <strong>24/7 Support:</strong> Get support anytime to resolve
                  issues and keep your store running smoothly.
                </li>
              </ul>
            </section>

            <section className="mt-5">
              <h3 className="text-lg font-semibold">Plugin Download</h3>
              <p className="mt-4 text-md">
                Ready to enhance your WooCommerce store with the Octoverse
                Payment Gateway? Download the plugin now and start accepting
                secure payments in minutes!
              </p>
              <button
                onClick={handleDownload}
                className="mt-4 inline-block bg-[#ED2668] text-white py-2 px-6 rounded-lg text-md hover:bg-[#d22357] transition-all"
              >
                Download Plugin
              </button>
            </section>

            <section className="mt-5">
              <h3 className="text-lg font-semibold">
                How to Set Up the Plugin in WooCommerce
              </h3>
              <p className="mt-4 text-md">
                Follow these steps to set up the Octoverse Payment Gateway
                Plugin in your WooCommerce store:
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-2">
                <li className="text-md">
                  Download the{" "}
                  <a
                    href="/octoverse_woocommerce_plugin.zip"
                    className="font-semibold text-[#ED2668] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    plugin
                  </a>{" "}
                  and upload it to your WordPress site.
                </li>
                <li className="text-md">
                  In your WordPress admin panel, go to <strong>Plugins</strong>{" "}
                  → <strong>Installed Plugins</strong> and activate the
                  Octoverse Payment Gateway Plugin.
                </li>
                <li className="text-md">
                  Go to <strong>WooCommerce</strong> → <strong>Settings</strong>{" "}
                  → <strong>Payments</strong> and click on "Octoverse Payment
                  Gateway" to configure the settings.
                </li>
                <li className="text-md">
                  Enter your <strong>Merchant ID</strong>, <strong>Secret Key</strong>, and{" "}
                  <strong>Data Key</strong> provided by Octoverse.
                </li>
                <li className="text-md">
                  Save the settings, and you are all set to start accepting
                  payments with Octoverse.
                </li>
              </ol>
              <p className="mt-4 text-md">
                Be sure to consult the plugin's documentation for advanced
                configuration options and troubleshooting.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Wordpress;
