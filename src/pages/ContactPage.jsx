import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="h-[full] w-[100%] flex flex-col items-center pb-6 md:pb-1">
      <div className="flex flex-col px-2 h-[65%] w-[90%] md:w-[60%] mx-auto mb-4 sm:mb-8 mt-16 rounded">
        <h2 className="font-Inter text-3xl font-bold mb-8 text-[#101828]">
          Contact Me
        </h2>
        <p className="font-Inter font-light text-lg mb-16 text-[#475467]">
          Hi there, contact me to ask me about anything you have in mind
        </p>
        <form className="flex flex-col ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
            <div className="flex flex-col mb-6 sm:mb-2 sm:w-[45%]">
              <label htmlFor="first_name" className="text-[#344054] text-sm mb-1">
                First name
              </label>
              <input
                required
                id="first_name"
                placeholder="Enter your first name"
                className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-[#1570EF] focus:outline-[#84CAFF] focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col mb-4 sm:mb-2 sm:w-[45%]">
              <label htmlFor="last_name" className="text-[#344054] text-sm mb-1">
                Last name
              </label>
              <input
                required
                id="last_name"
                placeholder="Enter your last name"
                className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-[#1570EF] focus:outline-[#84CAFF] focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-[#344054] text-sm mb-1">
              Email
            </label>
            <input
              required
              id="email"
              placeholder="yourname@email.com"
              className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-[#1570EF] focus:outline-[#84CAFF] focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[#344054] text-sm mb-1">
              Message
            </label>
            <textarea
              rows="5"
              required
              id="message"
              placeholder="Send me a message and I'll reply as soon as possible"
              className="text-gray-500 block placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-[#1570EF] focus:outline-[#84CAFF] focus:shadow-outline"
            />
          </div>

          <div className="mt-8 mb-2 flex flex-row items-start">
            <input
              required
              id="checkbox"
              type="checkbox"
              className="text- mr-[14px] mt-[5px] bg-gray-200 cursor-pointer border-[#D0D5DD] focus:ring-[#84CAFF] rounded"
            />
            <label htmlFor="checkbox" className="text-gray-600">
              You agree to providing your data to Edidiong who may contact you
            </label>
          </div>
          <input
            id="btn__submit"
            value="Send Message"
            type="submit"
            className="text-sm text-white font-normal my-4 bg-[#1570EF] w-full text-center p-2 rounded-md cursor-pointer"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
