import Card from './Card';

const features = [
	'Allowing custom actions performed on the file manager to interact with Javascript code on the website',
	'Full ownership of all data, backend will be self hosted',
	'Live updating of Home directory, Shared with me and Recycle bin',
	'Tabs for viewing and comparing different folders',
	'Drag and drop to reorder tabs',
	'Searchability in any folder',
	'Sharing to anyone using the same website and authorized to use the file manager',
	'Uploading files or entire folders',
	'Dragging and dropping for uploading',
	'Modified, Created and Last accessed dates for all folders and files',
	'Available space for upload dependent on user role',
	'Upload has no size limit, as long as it is within the available size to the user',
	'Progression bar for upload progress',
	'Different layout views',
	'Showing and hiding hidden files',
	'Showing and hiding file extensions',
	'Grouping',
	'Sorting',
	'Filtering',
	'Multiselect',
	'File/Folder operations (cut, copy, paste, rename, share, delete)',
	'Shortcuts for all file/folder operations, as well as other generic operations, ie. Select all',
];

const Features = () => {
	return (
		<>
			<div className="flex flex-wrap justify-center" style={{ margin: '-8px' }}>
				{features.map((feature) => (
					<Card key={feature} feature={feature} />
				))}
			</div>
		</>
	);
};

export default Features;
