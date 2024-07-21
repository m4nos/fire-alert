import { createAsyncThunk } from '@reduxjs/toolkit';
import { Marker } from '@store/map/map.types';
import { FirebaseStore } from 'firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export const fetchMarkers = createAsyncThunk('map/fetchMarkers', async () => {
  try {
    const markersCollection = query(collection(FirebaseStore, 'markers'));
    const markersSnapshot = await getDocs(markersCollection);

    const markers = markersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Marker[];

    return markers;
  } catch (error: any) {
    throw new Error(error);
  }
});
