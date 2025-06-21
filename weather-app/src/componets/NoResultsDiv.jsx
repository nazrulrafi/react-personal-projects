import React from 'react';

function NoResultsDiv(props) {
    return (
        <div className="no-results">
            <img src={`${import.meta.env.BASE_URL}no-result.svg`} alt="" className="icon"/>
            <h3 className="title">Something went wrong</h3>
            <p className="message">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos dolore eaque eum expedita fuga incidunt magnam nisi nobis nulla numquam obcaecati omnis provident, quibusdam, recusandae sapiente, sed tempora voluptas!
            </p>
        </div>
    );
}

export default NoResultsDiv;