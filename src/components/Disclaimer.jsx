import React from 'react';

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            'modal-content ' + (darkTheme ? 'bg-dark-2 text-light' : '')
          }
        >
          <div className="modal-header">
            <h5 className={'modal-title ' + (darkTheme ? 'text-white' : '')}>
              My Take on Sports
            </h5>
            <button
              type="button"
              className={'btn-close ' + (darkTheme ? 'btn-close-white' : '')}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I like basketball because it's fast, there’s a lot of strategy,
              and it mixes individual talent with teamwork.
              <br />
              <br />
              My favorite NFL team is the Green Bay Packers. I’m into their
              history, big fan base, and the fact that they're the only team
              owned by the community.
              <br />
              <br />
              Curling is probably my least favorite sport—it takes a lot of
              skill, but it’s kind of slow and not as exciting to watch for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
