import "../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import CardEditor from "./CardEditor";

class Card extends Component {
  state = {
    hover: false,
    editing: false,
    displayDetail: false,
  };

  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });
  showModal = () => this.setState({ displayDetail: true });
  hideModal = () => this.setState({ displayDetail: false });

  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text,
    });

  endEditing = () => this.setState({ hover: false, editing: false });

  editCard = async (text) => {
    const { card, dispatch } = this.props;

    this.endEditing();

    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: card._id, cardText: text },
    });
  };

  deleteCard = async () => {
    const { listId, card, dispatch } = this.props;

    if (window.confirm("Are you sure to delete this card?")) {
      dispatch({
        type: "DELETE_CARD",
        payload: { cardId: card._id, listId },
      });
    }
  };

  render() {
    const { card, index } = this.props;
    const { hover, editing, displayDetail } = this.state;

    if (!editing) {
      return (
        <>
          <Draggable draggableId={card._id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="Card"
                onMouseEnter={this.startHover}
                onMouseLeave={this.endHover}
                onClick={this.showModal}
              >
                {hover && (
                  <div className="Card-Icons">
                    <div className="Card-Icon" onClick={this.startEditing}>
                      <ion-icon name="create" />
                    </div>
                  </div>
                )}

                {card.text}
              </div>
            )}
          </Draggable>
          {displayDetail && (
            <div
              id="defaultModal"
              tabindex="-1"
              aria-hidden="true"
              class="flex justify-center fixed top-6 left-6 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      {card.text}
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                      onClick={this.hideModal}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div class="p-6 space-y-6 border-b">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Additional information
                    </p>
                    <div className="text-bold">Assignee</div>
                    <div className="flex items-center">
                      <div className="mr-3">Tien Dat Dang</div>
                      <img
                        src="https://lh3.googleusercontent.com/ogw/AOLn63E_P1E8QJKYcpVcSPTvstCbJ4EZCj275v09P4g7zg=s32-c-mo"
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="p-6 space-y-6 border-b">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      This is the detail of the paper
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      or the{" "}
                      <a
                        href="https://arxiv.org/pdf/1810.04805v2.pdf"
                        class="underline decoration-indigo-500"
                        target="_blank"
                      >
                        link of the paper
                      </a>
                    </p>
                  </div>
                  <div class="p-6 space-y-6 border-b">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Comment section to discuss about the paper
                    </p>
                    <div>
                      <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                          Discussion (20)
                        </h2>
                      </div>
                      <form class="mb-6">
                        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                          <label for="comment" class="sr-only">
                            Your comment
                          </label>
                          <textarea
                            id="comment"
                            rows="3"
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-blue-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                          Post comment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <CardEditor
          text={card.text}
          onSave={this.editCard}
          onDelete={this.deleteCard}
          onCancel={this.endEditing}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId],
});

export default connect(mapStateToProps)(Card);
