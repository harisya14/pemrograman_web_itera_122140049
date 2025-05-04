# magazine.py
from .library_item import LibraryItem

class Magazine(LibraryItem):
    # Inheritance:
    # - Magazine mewarisi atribut dan metode dari LibraryItem.
    def __init__(
        self, id: str, title: str, publisher: str, year: int, copies: int,
        issue_number: int, month: str
    ):
        super().__init__(id, title, publisher, year, copies)
        # Encapsulation:
        self._issue_number = issue_number
        self._month = month

    @property
    def issue_number(self) -> int:
        return self._issue_number

    @property
    def month(self) -> str:
        return self._month

    def info(self) -> str:
        """
        Polymorphism:
        - Implementasi info() khusus untuk Magazine.
        """
        return (
            f"[Magazine] {self.title} — Issue {self.issue_number} "
            f"({self.month} {self.year}) | Available: {self.copies}"
        )
