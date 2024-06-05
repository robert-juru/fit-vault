import styles from "./workoutFilter.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className={styles.workoutProgramsContainer}>
      <h2>Filter the programs</h2>
      <div className={styles.searchContainer}>
        <SearchIcon sx={{ position: "absolute", marginLeft: "8px" }} />
        <form>
          <input type="search" placeholder="Search by program" />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
