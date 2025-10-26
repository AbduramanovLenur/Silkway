import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

export const useQueryParams = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const query = queryString.parse(location.search);

	const push = () => {
		navigate({
			search: queryString.stringify(query)
		});
	};

	const append = (key: string, value: string | number, removeAll?: boolean, removeKeys?: string[]) => {
		const urlSearch = new URLSearchParams(removeAll ? '' : location.search);

		if (value) {
			urlSearch.set(key, String(value));

			if (!removeAll && removeKeys) {
				removeKeys?.forEach((item) => {
					urlSearch.delete(item);
				});
			}

			navigate({
				search: urlSearch.toString()
			});
		} else {
			urlSearch.delete(key);
			remove(key);
		}
	};

	const appends = (data: { key: string; value: string }[], removeAll?: boolean) => {
		const urlSearch = new URLSearchParams(removeAll ? '' : location.search);

		data?.forEach((item) => {
			if (item.value) {
				urlSearch.set(item.key, String(item.value));

				navigate({
					search: urlSearch.toString()
				});
			} else {
				urlSearch.delete(item.key);
				remove(item.key);
			}
		});
	};

	const remove = (key: string) => {
		delete query[key];
		push();
	};

	const clear = () => {
		navigate({
			search: ''
		});
	};

	const queries = () => {
		const queryParams = new URLSearchParams(location.search);
		const queryParamObject: { [key: string]: string } = {};

		for (const [key, value] of queryParams.entries()) {
			queryParamObject[key] = value;
		}

		return queryParamObject;
	};

	return {
		append,
		appends,
		query,
		remove,
		clear,
		queries
	};
};