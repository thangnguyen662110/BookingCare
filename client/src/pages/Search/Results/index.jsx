import Loading from "../../../components/Loading/Loading";
import useRegisterSearchResults from "../../../hooks/Search/useRegisterSearchResults";
import Item from "./Item";

function Results() {
  const { loading, searchResults } = useRegisterSearchResults();
  return (
    <div className="w-full">
      {loading ? (
        <div className="mt-10 mb-10 w-full">
          <Loading />
        </div>
      ) : (
        <div className="mt-4 mb-4 w-full">
          {searchResults.length > 0 ? (
            <div>
              {searchResults.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center text-[14px] text-center">Xin lỗi, không tìm thấy kết quả phù hợp!</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Results;
