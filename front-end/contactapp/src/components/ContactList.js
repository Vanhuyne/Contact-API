/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Contact from "./Contact";
const ContactList = ({ data, currentPage, getAllContacts }) => {
  return (
    <main className="main">
      {/* Kiểm tra có contact từ server */}
      {data?.content?.length ? null : (
        <div>No Contacts. Please add a new contact</div>
      )}

      {/* Nếu có dữ liệu thì hiển thị */}
      <ul className="contact__list">
        {data?.content?.length > 0 &&
          data.content.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
      </ul>

      {data?.content?.length > 0 && data?.totalPages > 1 && (
        <div className="pagination">
          <a
            onClick={() => getAllContacts(currentPage - 1)}
            className={0 === currentPage ? "disabled" : ""}
          >
            &laquo;
          </a>

          {data &&
            //    Tạo mảg rỗng lấy từ totalPages gán index cho pages : Có 3 page => keys() = 0 , 1 , 2
            [...Array(data.totalPages).keys()].map((page, index) => (
              <a
                onClick={() => getAllContacts(page)}
                className={currentPage === page ? "active" : ""}
                key={page}
              >
                {page + 1}
              </a>
            ))}

          <a
            onClick={() => getAllContacts(currentPage + 1)}
            className={data.totalPages === currentPage + 1 ? "disabled" : ""}
          >
            &raquo;
          </a>
        </div>
      )}
    </main>
  );
};
export default ContactList;
