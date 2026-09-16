import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './components/pages/MainPage'
import { CardsPage } from './components/pages/CardsPage'
import { LoginPage } from './components/pages/LoginPage'
import { ProfilePage } from './components/pages/ProfilePage'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/cards"
                    element={(
                        <ProtectedRoute>
                            <CardsPage />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path="/profile"
                    element={(
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    )}
                />
                <Route path="*" element={<>404</>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
