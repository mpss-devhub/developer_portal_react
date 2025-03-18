import React from 'react';
import Layout from '../layout/Layouts';

const Wordpress = () => {
    return (
        <Layout>
            <main class="bg-white py-4">
                <div class="shadow-md mx-auto max-w-screen-xl">
                    <div class="w-full mx-auto p-6">
                        <h2 class="mb-6 text-2xl font-semibold">
                            Boost Your WooCommerce Store with <br />
                            <span class="">Octoverse Payment Gateway Plugin</span>
                        </h2>
                        <hr class="border border-[#ED2668] mb-4" />
                        <h3 class="text-md font-semibold">
                            Secure, Fast, and Reliable Payment Solutions for Your Online Store
                        </h3>
                        <p class="mt-6 text-base">
                            Are you looking to streamline your payment processes and provide
                            your customers with a seamless shopping experience?
                            <span class="font-semibold ">The Octoverse Payment Gateway Plugin</span>
                            for WooCommerce is here to take your online store to the next level!
                        </p>

                        <section class="mt-5">
                            <h3 class="text-lg font-semibold ">Why Choose Octoverse Payment Gateway?</h3>
                            <ul class="list-disc list-inside mt-4 space-y-2">
                                <li class="text-md">
                                    <strong>Seamless Integration:</strong> Easily integrate with WooCommerce without complicated configurations.
                                </li>
                                <li class="text-md">
                                    <strong>Fast Transactions:</strong> Ensure fast and secure payment processing for your customers.
                                </li>
                                <li class="text-md">
                                    <strong>Multiple Payment Options:</strong> Accept payments from a variety of sources including credit cards and digital wallets.
                                </li>
                                <li class="text-md">
                                    <strong>Global Reach:</strong> Expand your reach to customers around the world with international payment capabilities.
                                </li>
                                <li class="text-md">
                                    <strong>Security & Reliability:</strong> Built with high security to ensure your customers' data is always protected.
                                </li>
                                <li class="text-md">
                                    <strong>24/7 Support:</strong> Get support anytime to resolve issues and keep your store running smoothly.
                                </li>
                            </ul>
                        </section>

                        <section class="mt-5">
                            <h3 class="text-lg font-semibold ">Plugin Download</h3>
                            <p class="mt-4 text-md">
                                Ready to enhance your WooCommerce store with the Octoverse Payment Gateway? Download the plugin now and start accepting secure payments in minutes!
                            </p>
                            <a href="https://yourwebsite.com/download/octoverse-payment-gateway-plugin.zip"
                                class="mt-4 inline-block bg-[#ED2668] text-white py-2 px-6 rounded-lg text-md hover:bg-[#d22357] transition-all">
                                Download Plugin
                            </a>
                        </section>

                        <section class="mt-5">
                            <h3 class="text-lg font-semibold ">How to Set Up the Plugin in WooCommerce</h3>
                            <p class="mt-4 text-md">
                                Follow these steps to set up the Octoverse Payment Gateway Plugin in your WooCommerce store:
                            </p>
                            <ol class="list-decimal list-inside mt-4 space-y-2">
                                <li class="text-md">
                                    Download the <a href="https://yourwebsite.com/download/octoverse-payment-gateway-plugin.zip" class="font-semibold ">plugin</a> and upload it to your WordPress site.
                                </li>
                                <li class="text-md">
                                    In your WordPress admin panel, go to <strong>Plugins</strong>  <strong>Installed Plugins</strong> and activate the Octoverse Payment Gateway Plugin.
                                </li>
                                <li class="text-md">
                                    Go to <strong>WooCommerce</strong>  <strong>Settings</strong>  <strong>Payments</strong> and click on "Octoverse Payment Gateway" to configure the settings.
                                </li>
                                <li class="text-md">
                                    Enter your Merchant ID,Secret key & Data key for the gateway which is provided from Octoverse.
                                </li>
                                <li class="text-md">
                                    Save the settings and you are all set to start accepting payments with Octoverse.
                                </li>
                            </ol>
                            <p class="mt-4 text-md">
                                Be sure to consult the plugin's documentation for advanced configuration options and troubleshooting.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Wordpress