const Review = () => {
  return (
    <div>
      <div className="review max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold  text-center mb-10">
          User <span className="text-[#28844b]">Review</span>
        </h2>

        <div className="review-card-cont   grid grid-cols-1 gap-6 lg:grid-cols-3 ">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="review-card text-center p-6 bg-[#e1f3b7] rounded  ">
              <img
                className="w-40 mx-auto mb-10 "
                src="https://i.ibb.co/R2FDZwj/322970802-1361659227921199-5989935501524500304-n-fotor-2023102452736.png"
                alt=""
              />
              <p className="w-52 text-black mx-auto mb-4 text-base">
                Our team loves the private group chat on this website for its
                top-notch security features and user-friendly design. It's a
                convenient and safe space for our discussions, and the regular
                updates show a commitment to keeping things cutting-edge.
              </p>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-[#23A6F0] font-bold my-2">Mahdi</p>
              <p className="font-bold text-black">Developer</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="review-card text-center p-6 bg-[#e1f3b7] rounded  ">
              <img
                className="w-40 mx-auto mb-10 "
                src="https://i.ibb.co/t800sJ2/363419763-3271725966459343-2517708948391301223-n-fotor-2023102452714.png"
                alt=""
              />
              <p className="w-52 text-black mx-auto mb-4 text-base">
                This website's private group chat enhances our teamwork. The
                customizable interface and responsive support make communication
                a breeze. It's clear they prioritize user experience, ensuring a
                seamless and effective collaboration platform for our team.
              </p>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-[#23A6F0] font-bold my-2">KH Sohel</p>
              <p className="font-bold text-black">Engineer</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="review-card text-center p-6 bg-[#e1f3b7] rounded   ">
              <img
                className="w-40 mx-auto mb-10 "
                src="https://i.ibb.co/HpdcW8v/336211037-1593651604490050-1878870614925267789-n-fotor-2023102452658.png"
                alt=""
              />
              <p className="w-52 text-black mx-auto mb-4 text-base">
                The private group chat on this website has become our go-to for
                secure and dynamic discussions. The constant updates keep it
                fresh, while the intuitive design streamlines our conversations.
                It's a reliable hub for our team's communication needs.
              </p>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-[#23A6F0] font-bold my-2">Ibrahim</p>
              <p className="font-bold text-black">Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
