import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { isDarkMode } = useAppStore();

  const getPagesToShow = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === 1
            ? `${isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`
            : `${isDarkMode ? 'bg-gray-700 hover:bg-primary' : 'bg-gray-200 hover:bg-primary'} text-dark dark:text-light hover:text-white`
        }`}
      >
        <FaChevronLeft />
      </button>

      {pagesToShow.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
            currentPage === page
              ? 'bg-primary text-white'
              : `${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === totalPages
            ? `${isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`
            : `${isDarkMode ? 'bg-gray-700 hover:bg-primary' : 'bg-gray-200 hover:bg-primary'} text-dark dark:text-light hover:text-white`
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
