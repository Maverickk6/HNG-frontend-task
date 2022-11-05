import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="h-[100%] w-[100%] flex flex-col items-center">
      <div className="flex flex-col px-4 h-[600px] w-[50%] mx-auto mb-1 mt-16 rounded">
        <h2 className="font-Inter text-3xl font-bold mb-8 text-[#101828]">
          Contact Me
        </h2>
        <p className="font-Inter font-light text-lg mb-16 text-[#475467]">
          Hi there, contact me to ask me about anything you have in mind
        </p>
        <form className="flex flex-col ">
          <div className="flex flex-row items-center justify-between mb-6">
            <div className="flex flex-col w-[45%]">
              <label for="Firstname" className="text-[#344054] text-sm mb-1">
                First name
              </label>
              <input
                required
                id="first_name"
                placeholder="Enter your first name"
                className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded"
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <label for="lastName" className="text-[#344054] text-sm mb-1">
                Last name
              </label>
              <input
                required
                id="last_name"
                placeholder="Enter your last name"
                className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label for="email" className="text-[#344054] text-sm mb-1">
              Email
            </label>
            <input
              required
              id="email"
              placeholder="yourname@email.com"
              className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#344054] text-sm mb-1">Message</label>
            <input
              required
              type="text"
              id="message"
              placeholder="Send me a message and I'll reply as soon as possible"
              className="placeholder:text-[#667085] placeholder:text-[15px] border border-[#D0D5DD] py-2 px-4 rounded"
            />
          </div>

          <div className="mt-8 mb-2">
            <input type="checkbox" className="mr-[10px]" />
            <label className="text-gray-600">
              You agree to providing your data to Edidiong who may contact you
            </label>
          </div>
          <input
            id="btn_submit"
            value="Send Message"
            type="submit"
            className="text-md text-white font-light my-4 bg-[#1570EF] w-full text-center p-2 rounded-md"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
