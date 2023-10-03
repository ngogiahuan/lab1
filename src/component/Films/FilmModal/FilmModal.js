
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FilmModal.css";

function FilmModal({ film, show, onHide }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="film-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="film-modal-title">
            {film ? film.title : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {film ? (
            <>
              <div className="modal-content-infor">
                <div className="modal-img">
                  <img
                    src={film.image}
                    alt={film.title}
                    style={{ height: "50vh" }}
                  />
                </div>
                <div className="modal-infor">
                  <h3 style={{ paddingTop: "10px" }}>{film.title}</h3>
                  <p style={{ paddingTop: "10px" }}>Year: {film.year}</p>
                  <p>Nation: {film.nation}</p>
                  <p>{film.description}</p>
                </div>

                {/* Add other film details here */}
              </div>
            </>
          ) : (
            "Loading..."
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilmModal;
