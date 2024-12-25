import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf flex"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      <img
                        src={item.imgurl || 'default-image.png'}
                        alt={item.name || 'Portfolio item'}
                        className="item-img"
                      />
                      <div>
                        <div className="portfolio-item-meta">
                          <a
                            href={item.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
        );
  }
}