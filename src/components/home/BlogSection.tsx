import Link from "next/link";

export default function BlogSection() {
  const blogPosts = [
    {
      image: "/img/blog/home-blog-1.jpg",
      date: "March 31, 2019",
      author: "Admin",
      title: "Duis lacus urna condimentum a vehicula consectetur",
    },
    {
      image: "/img/blog/home-blog-2.jpg",
      date: "March 31, 2019",
      author: "Admin",
      title: "Class aptent taciti sociosqu ad litora torquent per conubia",
    },
    {
      image: "/img/blog/home-blog-3.jpg",
      date: "March 31, 2019",
      author: "Admin",
      title: "Class aptent taciti sociosqu ad litora torquent per conubia",
    },
  ];

  return (
    <div className="ps-section ps-home-blog">
      <div className="container">
        <div className="ps-section__header">
          <p>Blog & News</p>
          <h3>From Our Archive</h3>
          <i className="chikery-tt3"></i>
        </div>

        <div className="ps-section__content">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
              >
                <div className="ps-post">
                  <div className="ps-post__thumbnail">
                    <img src={post.image} alt={post.title} />
                    <Link className="ps-post__overlay" href="/blog-detail"></Link>
                  </div>

                  <div className="ps-post__content">
                    <p className="ps-post__meta">
                      {post.date} by <Link href="#">{post.author}</Link>
                    </p>
                    <Link className="ps-post__title" href="/blog-detail">
                      {post.title}
                    </Link>
                    <Link className="ps-post__morelink" href="/blog-detail">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-section__footer">
          <Link className="ps-btn ps-btn--outline" href="/blog">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}