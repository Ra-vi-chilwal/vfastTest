import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center font" style={{ marginTop: "50px" }}>
          WHAT OUR CLIENTS SAY
        </h1>
      </div>
      <div className="verification md:grid grid-cols-3 gap-4 m-8">
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/01.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>
              "Best Background Check Company in DELHI NCR.... Cheers for VFAST
              great job!"
            </p>
            <div className="testimonial-meta font-serif"> Vishal jain</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/02.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>"Best Background Check Company in Pan INDIA"</p>
            <div className="testimonial-meta font-serif"> Shrishty Verma</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/05.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>
              "Best Background Verification Services Provider Company in Delhi
              NCR #vfast #bgv."
            </p>
            <div className="testimonial-meta font-serif"> Aman Verma</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/04.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>
              "An Indian background verification company which is at par with
              the international standard. Great job VFAST"
            </p>
            <div className="testimonial-meta font-serif">Vishnu Raheja</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/05.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>
              "India's leading background verification company #VFAST Thanks for
              saving my ORGANISATION.."
            </p>
            <div className="testimonial-meta font-serif">Savitri Aggarwal</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="assets/testimonials/06.png" alt="PHTO" />
          </div>
          <div className="testimonial-content">
            <p>
              "VFAST provide good culture and good environment for
              employee..Awesome company for GOOD CARRER GROWTH"
            </p>
            <div className="testimonial-meta font-serif">Shreya Das</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center font" style={{ marginTop: "30px" }}>
          WHAT MAKES US UNIQUE IN VERIFICATION INDUSTRY?
        </h1>
      </div>
      <p>Our innovative and on-demand solutions put you in the driver’s seat, providing you with the features and services vital to proficiently and effectively manage your background screening program and make smarter decisions fast.</p>
      <li>
        56% of employers say the leading benefit of background checks is better quality of hire.</li>
      <li> 84% of employers report finding misrepresentations on a resume or job application.</li>
      <li>74% of employers say background screening uncovered issues that wouldn’t have been caught otherwise.</li>

      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center font" style={{ marginTop: "30px" }}>
          ENROLLMENT        </h1>
  
      </div>
      <li> EMPLOYER </li>
        <li> EMPLYOEE </li>
        <li> STUDENT</li>
      <div className=" block justify-center sm:flex md:m-20">
        <div
          className="h-100 m-5 sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img src="assets/team/amarjeet.jpg" alt="imgAm" />
        </div>
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-black font-bold font-serif text-xl mb-2">MD PROFILE</div>
            <p className="text-grey-darker fontServ text-base border-l-4 border-gray-500 pl-4 mb-6  rounded">
              Mr. Amarjeet Singh is a Managing Director and the Founder of FBIV
              Infocomm Pvt Ltd. He has recently launched the "VFAST" background
              verification services which are leading & envolving rapidly in the
              background verification industry. it's the first time that any
              background verification services is also available on the VFAST
              app(Android and IOS) for everyone and for an easy approach.
            </p>
            <p className="text-grey-darker fontServ text-base border-l-4 border-gray-500 pl-4 mb-6  rounded">
              With the VFAST launch, he cleared his visions to become a leader
              in the background verification sector to provide fair, cutting
              edge, state of the art, comprehensive and foolproof services to
              everyone. VFAST provide THREE Enrollments(Employer,Employee,and
              Students) and Nine Services (Tenent,Vehicle,Company,Bride &
              Groom,Company,Travel,Product,The Property and Employee). We
              profoundly and thoroughly do the background verification of all
              the enrollments and services to provide the most accurate and
              comprehensive reports to every end user at fair and incredible
              prices.
            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Landing;
